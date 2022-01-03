// isValidExpression
// create function to determine the given expression is correct or not
// expression will be string of open bracket nor close bracket e.g ({[[()]]})
// your function should determine the expression is it correct or not
// examples:
// ({[]}) => true
// ([][]{})=> true
// ({)(]){[} => false
// [)()] => false
// ({[}]) => false

function validation(data) {
    // var temp

    let splitData = data.split("") 
    // console.log(splitData)
    // return data
    for(let i = 0; i < splitData.length; i++) {
        if(splitData[i] == "(") {
            if(splitData[i + 1] == ")") {
                return true
            }
        }
        else if (splitData[i] == "{") {
            if(splitData[i + 1] == "}") {
                return true
            }
        }
        else if (splitData[i] == "[") {
            if(splitData[i + 1] == "]") {
                return true
            }
        }
        else {
            return false
        }
        // console.log(splitData[i])
    }
}
// console.log(validation("test"))
console.log(validation("({[]})"))
console.log(validation("([][]{})"))
console.log(validation("({)(]){[}"))
console.log(validation("[)()]"))
console.log(validation("({[}])"))