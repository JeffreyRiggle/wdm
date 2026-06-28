// Generated from wdm.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import wdmListener from './wdmListener.js';
const serializedATN = [4,1,20,104,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,1,0,1,0,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,1,1,1,3,1,24,8,1,
1,1,1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,1,1,1,1,1,4,1,37,8,1,11,1,12,1,
38,1,2,3,2,42,8,2,1,2,1,2,1,2,3,2,47,8,2,1,2,1,2,5,2,51,8,2,10,2,12,2,54,
9,2,1,2,1,2,1,2,1,2,1,2,4,2,61,8,2,11,2,12,2,62,1,3,1,3,1,3,3,3,68,8,3,1,
3,1,3,5,3,72,8,3,10,3,12,3,75,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,3,4,88,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,99,8,4,10,4,12,
4,102,9,4,1,4,0,1,8,5,0,2,4,6,8,0,4,2,0,8,9,19,19,1,0,12,13,1,0,10,11,1,
0,14,16,117,0,13,1,0,0,0,2,19,1,0,0,0,4,41,1,0,0,0,6,64,1,0,0,0,8,87,1,0,
0,0,10,14,3,8,4,0,11,14,3,4,2,0,12,14,3,2,1,0,13,10,1,0,0,0,13,11,1,0,0,
0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,
17,18,5,0,0,1,18,1,1,0,0,0,19,20,5,18,0,0,20,21,5,19,0,0,21,23,5,1,0,0,22,
24,5,7,0,0,23,22,1,0,0,0,23,24,1,0,0,0,24,29,1,0,0,0,25,26,5,2,0,0,26,28,
5,7,0,0,27,25,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,
0,0,0,31,29,1,0,0,0,32,33,5,3,0,0,33,34,5,6,0,0,34,36,5,4,0,0,35,37,5,5,
0,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,3,1,0,0,0,
40,42,5,17,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,19,0,0,
44,46,5,1,0,0,45,47,5,7,0,0,46,45,1,0,0,0,46,47,1,0,0,0,47,52,1,0,0,0,48,
49,5,2,0,0,49,51,5,7,0,0,50,48,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,
1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,5,3,0,0,56,57,5,6,0,0,57,58,5,
4,0,0,58,60,3,8,4,0,59,61,5,5,0,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,
0,0,62,63,1,0,0,0,63,5,1,0,0,0,64,65,5,19,0,0,65,67,5,1,0,0,66,68,7,0,0,
0,67,66,1,0,0,0,67,68,1,0,0,0,68,73,1,0,0,0,69,70,5,2,0,0,70,72,7,0,0,0,
71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,
73,1,0,0,0,76,77,5,3,0,0,77,7,1,0,0,0,78,79,6,4,-1,0,79,88,3,6,3,0,80,81,
5,1,0,0,81,82,3,8,4,0,82,83,5,3,0,0,83,88,1,0,0,0,84,88,5,8,0,0,85,88,5,
9,0,0,86,88,5,19,0,0,87,78,1,0,0,0,87,80,1,0,0,0,87,84,1,0,0,0,87,85,1,0,
0,0,87,86,1,0,0,0,88,100,1,0,0,0,89,90,10,6,0,0,90,91,7,1,0,0,91,99,3,8,
4,7,92,93,10,5,0,0,93,94,7,2,0,0,94,99,3,8,4,6,95,96,10,4,0,0,96,97,7,3,
0,0,97,99,3,8,4,5,98,89,1,0,0,0,98,92,1,0,0,0,98,95,1,0,0,0,99,102,1,0,0,
0,100,98,1,0,0,0,100,101,1,0,0,0,101,9,1,0,0,0,102,100,1,0,0,0,14,13,15,
23,29,38,41,46,52,62,67,73,87,98,100];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class wdmParser extends antlr4.Parser {

    static grammarFileName = "wdm.g4";
    static literalNames = [ null, "'('", "','", "')'", "'->'", "'\\n'", 
                            null, null, null, null, "'+'", "'-'", "'/'", 
                            "'*'", "'<<'", "'>>'", "'^'", "'pub'", "'import'" ];
    static symbolicNames = [ null, null, null, null, null, null, "DATATYPE", 
                             "PARAMETER", "INTEGER", "FLOAT", "PLUS", "MINUS", 
                             "DIVIDE", "MULTIPLY", "SHIFTLEFT", "SHIFTRIGHT", 
                             "XOR", "PUBLICMARKER", "IMPORTMARKER", "NAME", 
                             "WS" ];
    static ruleNames = [ "program", "importDef", "functiondef", "functioncall", 
                         "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wdmParser.ruleNames;
        this.literalNames = wdmParser.literalNames;
        this.symbolicNames = wdmParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wdmParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 13;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 10;
	                this.expression(0);
	                break;

	            case 2:
	                this.state = 11;
	                this.functiondef();
	                break;

	            case 3:
	                this.state = 12;
	                this.importDef();
	                break;

	            }
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 918274) !== 0));
	        this.state = 17;
	        this.match(wdmParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importDef() {
	    let localctx = new ImportDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wdmParser.RULE_importDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(wdmParser.IMPORTMARKER);
	        this.state = 20;
	        this.match(wdmParser.NAME);
	        this.state = 21;
	        this.match(wdmParser.T__0);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 22;
	            this.match(wdmParser.PARAMETER);
	        }

	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 25;
	            this.match(wdmParser.T__1);
	            this.state = 26;
	            this.match(wdmParser.PARAMETER);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(wdmParser.T__2);
	        this.state = 33;
	        this.match(wdmParser.DATATYPE);
	        this.state = 34;
	        this.match(wdmParser.T__3);
	        this.state = 36; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 35;
	            this.match(wdmParser.T__4);
	            this.state = 38; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functiondef() {
	    let localctx = new FunctiondefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wdmParser.RULE_functiondef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 40;
	            this.match(wdmParser.PUBLICMARKER);
	        }

	        this.state = 43;
	        this.match(wdmParser.NAME);
	        this.state = 44;
	        this.match(wdmParser.T__0);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 45;
	            this.match(wdmParser.PARAMETER);
	        }

	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 48;
	            this.match(wdmParser.T__1);
	            this.state = 49;
	            this.match(wdmParser.PARAMETER);
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(wdmParser.T__2);
	        this.state = 56;
	        this.match(wdmParser.DATATYPE);
	        this.state = 57;
	        this.match(wdmParser.T__3);
	        this.state = 58;
	        this.expression(0);
	        this.state = 60; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 59;
	            this.match(wdmParser.T__4);
	            this.state = 62; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functioncall() {
	    let localctx = new FunctioncallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, wdmParser.RULE_functioncall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(wdmParser.NAME);
	        this.state = 65;
	        this.match(wdmParser.T__0);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 525056) !== 0)) {
	            this.state = 66;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 525056) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 69;
	            this.match(wdmParser.T__1);
	            this.state = 70;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 525056) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this.match(wdmParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, wdmParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 79;
	            this.functioncall();
	            break;

	        case 2:
	            localctx = new GroupedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 80;
	            this.match(wdmParser.T__0);
	            this.state = 81;
	            this.expression(0);
	            this.state = 82;
	            this.match(wdmParser.T__2);
	            break;

	        case 3:
	            localctx = new IntegerContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 84;
	            this.match(wdmParser.INTEGER);
	            break;

	        case 4:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(wdmParser.FLOAT);
	            break;

	        case 5:
	            localctx = new VariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 86;
	            this.match(wdmParser.NAME);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 98;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AssociativeMathContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, wdmParser.RULE_expression);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 90;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 91;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new CommunicativeMathContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, wdmParser.RULE_expression);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 93;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 94;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new BinaryOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, wdmParser.RULE_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 96;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 97;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 102;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

wdmParser.EOF = antlr4.Token.EOF;
wdmParser.T__0 = 1;
wdmParser.T__1 = 2;
wdmParser.T__2 = 3;
wdmParser.T__3 = 4;
wdmParser.T__4 = 5;
wdmParser.DATATYPE = 6;
wdmParser.PARAMETER = 7;
wdmParser.INTEGER = 8;
wdmParser.FLOAT = 9;
wdmParser.PLUS = 10;
wdmParser.MINUS = 11;
wdmParser.DIVIDE = 12;
wdmParser.MULTIPLY = 13;
wdmParser.SHIFTLEFT = 14;
wdmParser.SHIFTRIGHT = 15;
wdmParser.XOR = 16;
wdmParser.PUBLICMARKER = 17;
wdmParser.IMPORTMARKER = 18;
wdmParser.NAME = 19;
wdmParser.WS = 20;

wdmParser.RULE_program = 0;
wdmParser.RULE_importDef = 1;
wdmParser.RULE_functiondef = 2;
wdmParser.RULE_functioncall = 3;
wdmParser.RULE_expression = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wdmParser.RULE_program;
    }

	EOF() {
	    return this.getToken(wdmParser.EOF, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	functiondef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctiondefContext);
	    } else {
	        return this.getTypedRuleContext(FunctiondefContext,i);
	    }
	};

	importDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportDefContext);
	    } else {
	        return this.getTypedRuleContext(ImportDefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitProgram(this);
		}
	}


}



class ImportDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wdmParser.RULE_importDef;
    }

	IMPORTMARKER() {
	    return this.getToken(wdmParser.IMPORTMARKER, 0);
	};

	NAME() {
	    return this.getToken(wdmParser.NAME, 0);
	};

	DATATYPE() {
	    return this.getToken(wdmParser.DATATYPE, 0);
	};

	PARAMETER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wdmParser.PARAMETER);
	    } else {
	        return this.getToken(wdmParser.PARAMETER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterImportDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitImportDef(this);
		}
	}


}



class FunctiondefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wdmParser.RULE_functiondef;
    }

	NAME() {
	    return this.getToken(wdmParser.NAME, 0);
	};

	DATATYPE() {
	    return this.getToken(wdmParser.DATATYPE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PUBLICMARKER() {
	    return this.getToken(wdmParser.PUBLICMARKER, 0);
	};

	PARAMETER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wdmParser.PARAMETER);
	    } else {
	        return this.getToken(wdmParser.PARAMETER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterFunctiondef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitFunctiondef(this);
		}
	}


}



class FunctioncallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wdmParser.RULE_functioncall;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wdmParser.NAME);
	    } else {
	        return this.getToken(wdmParser.NAME, i);
	    }
	};


	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wdmParser.INTEGER);
	    } else {
	        return this.getToken(wdmParser.INTEGER, i);
	    }
	};


	FLOAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wdmParser.FLOAT);
	    } else {
	        return this.getToken(wdmParser.FLOAT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterFunctioncall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitFunctioncall(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wdmParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CommunicativeMathContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(wdmParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(wdmParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterCommunicativeMath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitCommunicativeMath(this);
		}
	}


}

wdmParser.CommunicativeMathContext = CommunicativeMathContext;

class AssociativeMathContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIVIDE() {
	    return this.getToken(wdmParser.DIVIDE, 0);
	};

	MULTIPLY() {
	    return this.getToken(wdmParser.MULTIPLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterAssociativeMath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitAssociativeMath(this);
		}
	}


}

wdmParser.AssociativeMathContext = AssociativeMathContext;

class FunctionCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functioncall() {
	    return this.getTypedRuleContext(FunctioncallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}

wdmParser.FunctionCallContext = FunctionCallContext;

class VariableContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NAME() {
	    return this.getToken(wdmParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitVariable(this);
		}
	}


}

wdmParser.VariableContext = VariableContext;

class IntegerContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INTEGER() {
	    return this.getToken(wdmParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitInteger(this);
		}
	}


}

wdmParser.IntegerContext = IntegerContext;

class BinaryOperationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SHIFTLEFT() {
	    return this.getToken(wdmParser.SHIFTLEFT, 0);
	};

	SHIFTRIGHT() {
	    return this.getToken(wdmParser.SHIFTRIGHT, 0);
	};

	XOR() {
	    return this.getToken(wdmParser.XOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterBinaryOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitBinaryOperation(this);
		}
	}


}

wdmParser.BinaryOperationContext = BinaryOperationContext;

class FloatContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(wdmParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitFloat(this);
		}
	}


}

wdmParser.FloatContext = FloatContext;

class GroupedExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.enterGroupedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wdmListener ) {
	        listener.exitGroupedExpression(this);
		}
	}


}

wdmParser.GroupedExpressionContext = GroupedExpressionContext;


wdmParser.ProgramContext = ProgramContext; 
wdmParser.ImportDefContext = ImportDefContext; 
wdmParser.FunctiondefContext = FunctiondefContext; 
wdmParser.FunctioncallContext = FunctioncallContext; 
wdmParser.ExpressionContext = ExpressionContext; 
