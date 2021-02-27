// function add(a, b) {
//     return (BigInt(a) + BigInt(b)).toString(); // Fix me!
// }

function add(a, b) {
    let A = a.split('')
    let B = b.split('')
    let C = 0
    let resultStrArr = []
    let resultStr = ''
    let anotherRank = false

    if(A.length < B.length) {
        C = A
        A = B
        B = C
    }
    
    for(let i=A.length-1, j=B.length-1; i>=0 || j>=0; i--, j--) {
        let upperNum = Number(A[i])
        let belowNum = Number(B[j])
        let sum = 0
        if(anotherRank) {
            upperNum += 1
        }

        if(j<0) {
            sum = upperNum
        } else {
            sum = upperNum + belowNum
        }

        if(String(sum).length === 1) {
            resultStrArr.push(String(sum))
            anotherRank = false
        } else {
            resultStrArr.push(String(sum%10))
            anotherRank = true
        }
    }
    if(anotherRank) {
        resultStrArr.push('1')
    }
    resultStr = resultStrArr.reverse().join('')
    return resultStr
}

add('63829983432984289347293874', '90938498237058927340892374089')


'90938498237058927340892374089'
   '63829983432984289347293874'