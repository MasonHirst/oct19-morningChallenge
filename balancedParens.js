// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."
let sample5 = ")unbalanced(."

// Write your solution below:


function equalPar(str) {
    let openCount = 0
    let closeCount = 0
    for (let i = 0; i < str.length; i++) {
        if (closeCount > openCount) {
            return false
        }
        if (str[i] === `(`) {
            openCount++
        } 
        if (str[i] === `)`) {
            closeCount++
        }
    }


    if (openCount === closeCount) {
        return true
    } else {
        return false
    }
}


// function goodPar(str) {
//     let syntaxArr = []
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === '(') {
//             syntaxArr.push(str[i])
//         }
//         if (str[i] === ')' && syntaxArr.length > 0) {
//             syntaxArr.pop(syntaxArr[0])
//         }
//     }
//     if (syntaxArr.length === 0) {
//         return true
//     } else {
//         return false
//     }

// }



console.log(equalPar(sample1))
console.log(equalPar(sample2))
console.log(equalPar(sample3))
console.log(equalPar(sample4))
console.log(equalPar(sample5))



// console.log(goodPar(sample1))
// console.log(goodPar(sample2))
// console.log(goodPar(sample3))
// console.log(goodPar(sample4))
// console.log(goodPar(sample5))











