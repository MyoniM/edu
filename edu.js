// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const lexer = require("./lexer.js")
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "program", "symbols": ["_ml", "statements", "_ml"], "postprocess": 
        data => data[1]
                    },
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1$subexpression$1", "symbols": ["__lb_", "statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statements$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statement", "statements$ebnf$1"], "postprocess": 
        data => {
            const repeated = data[1]
            const restStatement = repeated.map(chunk => chunk[1])
            return [data[0], ...restStatement]
        }
                },
    {"name": "statement", "symbols": ["var_assign"], "postprocess": id},
    {"name": "statement", "symbols": ["func_call"], "postprocess": id},
    {"name": "statement", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "var_assign", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":":="}, "_", "expr"], "postprocess":  
        data => ({
            type: "var_assign",
            var_name: data[0],
            value: data[4],
        })
                },
    {"name": "func_call$ebnf$1$subexpression$1", "symbols": ["arg_list", "_ml"]},
    {"name": "func_call$ebnf$1", "symbols": ["func_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "func_call$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "func_call", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"("}, "_ml", "func_call$ebnf$1", {"literal":")"}], "postprocess": 
        data => ({
            type: "func_call",
            func_name: data[0],
            args: data[4] ? data[4][0] : []
        })
                },
    {"name": "lambda$ebnf$1$subexpression$1", "symbols": ["param_list", "_"]},
    {"name": "lambda$ebnf$1", "symbols": ["lambda$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "lambda$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "lambda", "symbols": [{"literal":"("}, "_", "lambda$ebnf$1", {"literal":")"}, "_", {"literal":"=>"}, "_ml", "lambda_body"], "postprocess": 
        data => ({
            type: "lambda",
            params: data[2] ? data[2][0] : [],
            body: data[7]
        })
                    },
    {"name": "param_list$ebnf$1", "symbols": []},
    {"name": "param_list$ebnf$1$subexpression$1", "symbols": ["__", "param"]},
    {"name": "param_list$ebnf$1", "symbols": ["param_list$ebnf$1", "param_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "param_list", "symbols": ["param", "param_list$ebnf$1"], "postprocess": 
        data => {
            const repeated = data[1]
            const restParams = repeated.map(chunk => chunk[1])
            return [data[0], ...restParams]
        }
                },
    {"name": "lambda_body", "symbols": ["expr"], "postprocess": 
        data => [data[0]] 
                },
    {"name": "lambda_body", "symbols": [{"literal":"{"}, "__lb_", "statements", "__lb_", {"literal":"}"}], "postprocess": 
        data => data[2]
                },
    {"name": "arg_list$ebnf$1", "symbols": []},
    {"name": "arg_list$ebnf$1$subexpression$1", "symbols": ["__ml", "expr"]},
    {"name": "arg_list$ebnf$1", "symbols": ["arg_list$ebnf$1", "arg_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "arg_list", "symbols": ["expr", "arg_list$ebnf$1"], "postprocess": 
        data => {
            const repeatedPart = data[1]
            const restParams = repeatedPart.map(part => part[1])
            return [data[0], ...restParams]
        }
                },
    {"name": "expr", "symbols": ["param"], "postprocess": id},
    {"name": "expr", "symbols": ["func_call"], "postprocess": id},
    {"name": "expr", "symbols": ["lambda"], "postprocess": id},
    {"name": "param", "symbols": ["boolean"], "postprocess": id},
    {"name": "param", "symbols": ["array"], "postprocess": id},
    {"name": "param", "symbols": ["myNull"], "postprocess": id},
    {"name": "param", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "param", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "param", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "myNull", "symbols": [{"literal":"null"}], "postprocess": () => null},
    {"name": "boolean", "symbols": [{"literal":"እውነት"}], "postprocess": 
        () => ({
            type: "boolean",
            value: true
        })
                },
    {"name": "boolean", "symbols": [{"literal":"ውሸት"}], "postprocess": 
        () => ({
            type: "boolean",
            value: false
        })
                },
    {"name": "array$ebnf$1$subexpression$1", "symbols": ["array_items", "_"]},
    {"name": "array$ebnf$1", "symbols": ["array$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "array$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "array", "symbols": [{"literal":"["}, "_", "array$ebnf$1", {"literal":"]"}], "postprocess": 
        (data) => ({
            type: "array",
            value: data[2] ? data[2][0] : []
        })
                },
    {"name": "array", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": 
        () => ({
            type: "array",
            value: []
        })
                },
    {"name": "array_items$ebnf$1", "symbols": []},
    {"name": "array_items$ebnf$1$subexpression$1", "symbols": ["__ml", "param"]},
    {"name": "array_items$ebnf$1", "symbols": ["array_items$ebnf$1", "array_items$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "array_items", "symbols": ["param", "array_items$ebnf$1"], "postprocess": 
        data => {
            const repeatedPart = data[1]
            const restParams = repeatedPart.map(part => part[1])
            return [data[0], ...restParams]
        }
                },
    {"name": "__lb_$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__lb_$ebnf$1", "symbols": ["__lb_$ebnf$1$subexpression$1"]},
    {"name": "__lb_$ebnf$1$subexpression$2", "symbols": ["_", (lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__lb_$ebnf$1", "symbols": ["__lb_$ebnf$1", "__lb_$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__lb_", "symbols": ["__lb_$ebnf$1", "_"]},
    {"name": "_ml$ebnf$1", "symbols": []},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "_ml$ebnf$1", "symbols": ["_ml$ebnf$1", "_ml$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_ml", "symbols": ["_ml$ebnf$1"]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1$subexpression$1"]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1", "__ml$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__ml", "symbols": ["__ml$ebnf$1"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
