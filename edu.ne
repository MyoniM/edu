@{%
    const lexer = require("./lexer.js")
%}

@lexer lexer

program -> _ml statements _ml
            {%
                data => data[1]
            %}

statements
    ->  statement (__lb_ statement):*
        {%
            data => {
                const repeated = data[1]
                const restStatement = repeated.map(chunk => chunk[1])
                return [data[0], ...restStatement]
            }
        %}
        
statement
    ->  var_assign     {% id %}
    |   func_call      {% id %}
    |   %comment       {% id %}

var_assign
    ->  %identifier _ ":=" _ expr
        {% 
            data => ({
                type: "var_assign",
                var_name: data[0],
                value: data[4],
            })
        %}

func_call
    ->  %identifier _ "(" _ml (arg_list  _ml):? ")"
        {%
            data => ({
                type: "func_call",
                func_name: data[0],
                args: data[4] ? data[4][0] : []
            })
        %}

# lambda/ arrow function
lambda -> "(" _ (param_list _):? ")" _ "=>" _ml  lambda_body
            {%
                data => ({
                    type: "lambda",
                    params: data[2] ? data[2][0] : [],
                    body: data[7]
                })
            %}

param_list
    ->  param (__ param):*
        {%
            data => {
                const repeated = data[1]
                const restParams = repeated.map(chunk => chunk[1])
                return [data[0], ...restParams]
            }
        %}

lambda_body
    ->  expr
        {%
            data => [data[0]] 
        %}
    |   "{" __lb_ statements __lb_ "}"
        {%
            data => data[2]
        %}

arg_list
    ->  expr (__ml expr):*
        {%
            data => {
                const repeatedPart = data[1]
                const restParams = repeatedPart.map(part => part[1])
                return [data[0], ...restParams]
            }
        %}

expr
    ->  param       {% id %}
    |   func_call   {% id %}
    |   lambda      {% id %}

param
    ->  boolean     {% id %}
    |   array       {% id %}
    |   %string     {% id %}
    |   %number     {% id %}
    |   %identifier {% id %}

# Data types
# number and string data types are defined on the lexer

# boolean data type
boolean
    ->  "true"
        {%
            () => ({
                type: "boolean",
                value: true
            })
        %}
    |   "false"
        {%
            () => ({
                type: "boolean",
                value: false
            })
        %}

# array data type
array
    ->  "[" _ (array_items  _):? "]"
        {%
            (data) => ({
                type: "array",
                value: data[2] ? data[2][0] : []
            })
        %}
    |   "[" _ "]"
        {%
            () => ({
                type: "array",
                value: []
            })
        %}

array_items
    ->  param (__ml param):*
        {%
            data => {
                const repeatedPart = data[1]
                const restParams = repeatedPart.map(part => part[1])
                return [data[0], ...restParams]
            }
        %}

__lb_ -> (_ %NL):+ _

_ml -> (%WS | %NL):*
__ml -> (%WS | %NL):+

_ -> %WS:*
__ -> %WS:+