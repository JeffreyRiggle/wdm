import wdmLexer from "./wdmLexer.js";
import wdmParser from './wdmParser.js';

export default class JavascriptGenerator {
    constructor(tree) {
        this.tree = tree;
        this.imports = [];
    }

    generate() {
        return this.visitProgram(this.tree);
    }

    visitProgram(context) {
        let res = '';
        for (let child of context.children) {
            if (child instanceof wdmParser.ImportDefContext) {
                this.visitImport(child)
            }
            if (child instanceof wdmParser.ExpressionContext) {
                res += this.visitExpression(child);
            }

            if (child instanceof wdmParser.FunctiondefContext) {
                res += this.visitFunctionDefinition(child);
            }
        }

        if (this.imports.length > 0) {
            res = `let imported = {};\nexport function setImports(imp) {\n\timported = imp;\n}\n` + res;
        }
        return res;
    }

    visitImport(context) {
        this.imports.push(context.NAME().getText());
    }

    visitFunctionDefinition(context) {
        return `${context.PUBLICMARKER() ? 'export ' : ''}function ${context.NAME()}${this.visitParameterDefinition(context.PARAMETER())} {\n\treturn ${this.visitExpression(context.expression())};\n}\n`;
    }

    visitParameterDefinition(context) {
        let result = '(';

        context.forEach((parameter, index) => {
            result += parameter.getText().split(':')[0];

            if (index < context.length - 1) {
                result += ', ';
            }
        })

        result += ')';
        return result;
    }

    visitExpression(context) {
        if (context instanceof wdmParser.GroupedExpressionContext) {
            return this.visitGroupedExpression(context);
        }

        if (context instanceof wdmParser.AssociativeMathContext) {
            return this.visitAssociativeMath(context);
        }

        if (context instanceof wdmParser.CommunicativeMathContext) {
            return this.visitCommunicativeMath(context);
        }

        if (context instanceof wdmParser.BinaryOperationContext) {
            return this.visitBinaryOperation(context);
        }
        
        if (context instanceof wdmParser.IntegerContext) {
            return this.visitInteger(context);
        }

        if (context instanceof wdmParser.FloatContext) {
            return this.visitFloat(context);
        }

        if (context instanceof wdmParser.VariableContext) {
            return this.visitVariable(context);
        }

        if (context instanceof wdmParser.FunctionCallContext) {
            return this.visitFunctionCall(context.functioncall());
        }

        return '';
    }

    visitGroupedExpression(context) {
        return `(${this.visitExpression(context.expression())})`;
    }

    visitAssociativeMath(context) {
        return `${this.visitExpression(context.expression(0))} ${this.visitOperator(context)} ${this.visitExpression(context.expression(1))}`;
    }

    visitCommunicativeMath(context) {
        return `${this.visitExpression(context.expression(0))} ${this.visitOperator(context)} ${this.visitExpression(context.expression(1))}`;
    }

    visitInteger(context) {
        return context.INTEGER().getText().replace('_i', '');
    }

    visitFloat(context) {
        return context.FLOAT().getText().replace('_f', '');
    }

    visitOperator(context) {
        const op = context.DIVIDE?.() ?? context.MULTIPLY?.() ?? context.PLUS?.() ?? context.MINUS?.();
        return op.getText();
    }

    visitVariable(context) {
        return context.NAME();
    }

    visitFunctionCall(context) {
        let targetFunction = context.NAME(0).getText();
        if (this.imports.includes(targetFunction)) {
            targetFunction = `imported.${targetFunction}`;
        }

        let result = `${targetFunction}(`;

        context.children.forEach((parameter, index) => {
            if (index === 0) return;

            const text = parameter.getText();

            if (text === '(' || text === ')' || text === ',') return;

            result += text.replace('_f', '').replace('_i', '');

            if (index < context.children.length - 2) {
                result += ', ';
            }
        });

        result += ')'
        return result;
    }

    visitBinaryOperation(context) {
        return `${this.visitExpression(context.expression(0))} ${this.visitBinaryOperator(context)} ${this.visitExpression(context.expression(1))}`;
    }

    visitBinaryOperator(context) {
        const op = context.SHIFTLEFT?.() ?? context.SHIFTRIGHT?.() ?? context.XOR?.();
        return op.getText();
    }
}