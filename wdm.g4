grammar wdm;
program: (expression | functiondef | importDef)+ EOF;
importDef: IMPORTMARKER NAME '(' PARAMETER? (',' PARAMETER)* ')' DATATYPE '->' '\n'+;
functiondef: PUBLICMARKER? NAME '(' PARAMETER? (',' PARAMETER)* ')' DATATYPE '->' expression'\n'+;
functioncall: NAME '(' (INTEGER | FLOAT | NAME)? (',' (INTEGER | FLOAT | NAME))* ')';
expression
    : functioncall #functionCall
    | '(' expression ')' #groupedExpression
    | expression op=(DIVIDE|MULTIPLY) expression # associativeMath
    | expression op=(PLUS|MINUS) expression # communicativeMath
    | expression op=(SHIFTLEFT|SHIFTRIGHT|XOR) expression # binaryOperation
    | INTEGER # integer
    | FLOAT # float
    | NAME # variable;
DATATYPE: ('f' | 'i');
PARAMETER: NAME ':' DATATYPE;
INTEGER : [0-9]+'_i';
FLOAT : ([0-9]+'.')?[0-9]+'_f';
PLUS: '+';
MINUS: '-';
DIVIDE: '/';
MULTIPLY: '*';
SHIFTLEFT: '<<';
SHIFTRIGHT: '>>';
XOR: '^';
PUBLICMARKER: 'pub';
IMPORTMARKER: 'import';
NAME: [a-zA-Z]+[a-zA-Z0-9]*;
WS : [ \t\r]+ -> skip ;