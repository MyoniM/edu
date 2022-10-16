# edu - Amharic programming language! 

edu is a minimal, transpiled programming language with not so easy syntax :P. edu is transpiled into `javascript`. <br/>

If you want to try it out, here is a [playground](https://edu-playground.web.app) <br/>

## How does edu work? <br/>
![edu-process](https://user-images.githubusercontent.com/61096394/196007766-c978b637-182b-4278-9dbe-6eb487cf42a6.PNG)

- `1) Lexer/ Tokenizer` <br/>
  - A tokenizer splits the input into a stream of larger units called tokens. This happens in a separate stage before parsing. <br/>

- `2) Parser` <br/>
  - Parsers turn strings of characters into meaningful data structures (like a JSON object). The returned <br/> 

- `3) Generator` <br/>
  - Generator takes the parsed object and chages it to the desired language(Javascript) which in turn will be executed to generate a machine code. 
  
## Features <br/>
- null
- variables
- boolean
- numbers
- strings
- array
- if condition
- loop
- lambda functions
- comments

## Examples <br/>
`Null` <br/>
```js
  ባዶ := null
  //transpiled version of the code
  var ባዶ = null
```

`Boolean` <br/>
```js
  ቡሊያን := እውነት
  //transpiled version of the code
  var ቡሊያን = true
```

`Number` <br/>
```js
  ቁጥር := 100
  //transpiled version of the code
  var ቁጥር = 100
```

`String` <br/>
```js
  ቁምፊዎች := "ደብዳቤ"
  //transpiled version of the code
  var ቁምፊዎች = "ደብዳቤ"
```

`Array` <br/>
```js
  ድርድር := [1 "ሁለት" እውነት]
  //transpiled version of the code
  var ድርድር = [1, "ሁለት", true]
```

`If condition` <br/>
```js
  መልስ := ከሆነ(እውነት 
              () => "እውነት ነው"
              () => "ውሸት ነው"
          )
  //transpiled version of the code
  var መልስ = ከሆነ( true, function (  ) {
    return "እውነት ነው"
  }, function (  ) {
    return "ውሸት ነው"
  } )
```

`Loop` <br/>
```js
  ለእያንዳንዱ(ክልል(0 6) አውጣ)
  //transpiled version of the code
  ለእያንዳንዱ( ክልል( 0, 6 ), አውጣ )
```

`Lambda function` <br/>
```js
  ተግባር := () => "ይሰራል"
  //transpiled version of the code
  var ተግባር = function (  ) {
    return "ይሰራል"
  }
```

`A working fibonachi sequence example` <br/>
```js
  ፋይቦናቺ := (n) => {
    ከሆነ(ያንሳል(n 2)
        () => n
        () =>
            ከሆነ(እኩል_ነው(n 2)
                () => 1
                () =>
                    ደምር(
                        ፋይቦናቺ(ቀንስ(n 1))
                        ፋይቦናቺ(ቀንስ(n 2))
                    )
            )
        )
  }
  //transpiled version of the code
  var ፋይቦናቺ = function ( n ) {
    return ከሆነ( ያንሳል( n, 2 ), function (  ) {
      return n
    }, function (  ) {
      return ከሆነ( እኩል_ነው( n, 2 ), function (  ) {
        return 1
      }, function (  ) {
        return ደምር( ፋይቦናቺ( ቀንስ( n, 1 ) ), ፋይቦናቺ( ቀንስ( n, 2 ) ) )
      } )
    } )
  }
  
  አውጣ(ፋይቦናቺ(10)) // 55 <= correnct answer
```

