import wdmLexer from "./wdmLexer.js";
import wdmParser from './wdmParser.js';

export default class WatGenerator {
    constructor(tree) {
        this.tree = tree;
        this.currentNumberType = 'i32';
        this.tabCount = 0;
        this.definitionMap = new Map();
    }

    generate() {
        return this.visitProgram(this.tree);
    }

    visitProgram(context) {
        let res = '(module\n';
        this.tabCount++;
        for (let child of context.children) {
            if (child instanceof wdmParser.ImportDefContext) {
                res += this.visitImport(child);
            }
            if (child instanceof wdmParser.ExpressionContext) {
                res += this.visitExpression(child);
            }
                
            if (child instanceof wdmParser.FunctiondefContext) {
                res += this.visitFunctionDefinition(child);
            }
        }
        this.tabCount--;
        res += ')';
        return res;
    }

    visitImport(context) {
        const importName = context.NAME().getText();
        this.definitionMap.set(importName, `$${importName}`);

        return `${this.getTabs()}(import "env" "${importName}" (func $${importName} ${this.visitParameterDefinition(context.PARAMETER())}(result ${context.DATATYPE()}32)))\n`;
    }

    visitFunctionDefinition(context) {
        let def = `${this.getTabs()}(func `
        if (context.PUBLICMARKER()) {
            this.definitionMap.set(context.NAME().getText(), this.definitionMap.size);
            def += `(export "${context.NAME()}")`;
        } else {
            this.definitionMap.set(context.NAME().getText(), `$${context.NAME()}`);
            def += `$${context.NAME()}`;
        }

        def += ` ${this.visitParameterDefinition(context.PARAMETER())}(result ${context.DATATYPE()}32)\n`;
        this.tabCount++;
        def += `${this.visitExpression(context.expression())}`;
        this.tabCount--;
        def += `${this.getTabs()})\n`;
        return def;
    }

    visitParameterDefinition(context) {
        return context.map((parameter) => {
            const text = parameter.getText();

            let parts = text.split(':');

            this.currentNumberType = `${parts[1]}32`
            return `(param $${parts[0]} ${this.currentNumberType}) `;
        }).join('');
    }

    visitExpression(context) {
        if (context instanceof wdmParser.GroupedExpressionContext) {
            return this.visitExpression(context.expression());
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

    visitCommunicativeMath(context) {
        return `${this.visitExpression(context.expression(0))}${this.visitExpression(context.expression(1))}${this.visitOperator(context)}`
    }

    visitAssociativeMath(context) {
        return `${this.visitExpression(context.expression(0))}${this.visitExpression(context.expression(1))}${this.visitOperator(context)}`
    }

    visitInteger(context) {
        this.currentNumberType = 'i32';
        return `${this.getTabs()}i32.const ${context.INTEGER().getText().replace('_i', '')}\n`;
    }

    visitFloat(context) {
        this.currentNumberType = 'f32';
        return `${this.getTabs()}f32.const ${context.FLOAT().getText().replace('_f', '')}\n`;
    }

    visitOperator(context) {
        if (context.DIVIDE?.()) {
            return `${this.getTabs()}${this.currentNumberType}.div${this.currentNumberType === 'i32' ? _s : ''}\n`;
        }
        if (context.MULTIPLY?.()) {
            return `${this.getTabs()}${this.currentNumberType}.mul\n`;
        }

        if (context.MINUS?.()) {
            return `${this.getTabs()}${this.currentNumberType}.sub\n`;
        }
        if (context.PLUS?.()) {
            return `${this.getTabs()}${this.currentNumberType}.add\n`;
        }
        return '';
    }

    visitVariable(context) {
        return `${this.getTabs()}local.get $${context.NAME()}\n`;
    }

    visitFunctionCall(context) {
        const tabs = this.getTabs();
        let result = '';

        context.children.forEach((parameter, index) => {
            if (index === 0) return;

            const text = parameter.getText();

            if (text === '(' || text === ')' || text === ',') return;

            const parts = text.split('_');

            if (parts.length === 1) {
                result += `${tabs}local.get $${parts[0]}\n`;
                return;
            }

            this.currentNumberType = `${parts[1]}32`;
            result += `${tabs}${this.currentNumberType}.const ${parts[0]}\n`;
        });

        result += `${tabs}call ${this.definitionMap.get(context.NAME(0).getText())}\n`;
        return result;
    }

    getTabs() {
        let res = '';
        for (let i = 0; i < this.tabCount; i++) {
            res += '\t';
        }
        return res;
    }

    visitBinaryOperation(context) {
        return `${this.visitExpression(context.expression(0))}${this.visitExpression(context.expression(1))}${this.visitBinaryOperator(context)}`
    }

    visitBinaryOperator(context) {
        if (context.SHIFTLEFT?.()) {
            return `${this.getTabs()}${this.currentNumberType}.shl\n`;
        }
        if (context.SHIFTRIGHT?.()) {
            return `${this.getTabs()}${this.currentNumberType}.shr_s\n`;
        }
        if (context.XOR?.()) {
            return `${this.getTabs()}${this.currentNumberType}.xor\n`;
        }
        return '';
    }
}