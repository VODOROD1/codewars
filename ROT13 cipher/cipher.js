function rot13(message){

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                    'H', 'I', 'J', 'K', 'L', 'M', 
                    'N', 'O', 'P', 'Q', 'R', 'S', 
                    'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let cipheredMessage = []
    for(let i=0; i<message.length; i++) {
        let currentSymbol
        if(/[a-z]/i.test(message[i])) {
            if(i === message.length-1) {
                currentSymbol = message.slice(i)
            } else { currentSymbol = message.slice(i,i+1) }

            let isUpperCase = currentSymbol.toUpperCase() === message[i];

            for(let j=0; j<alphabet.length; j++) {
                if(currentSymbol.toUpperCase() === alphabet[j]) {
                    if(j+13 < 25) {
                        isUpperCase ? 
                        cipheredMessage.push(alphabet.slice(j+13, j+14)[0]) :
                        cipheredMessage.push(alphabet[j+13].toLowerCase())
                        break
                    } else if(j+13 === 25) {
                        isUpperCase ? 
                        cipheredMessage.push(alphabet.slice(j+13)[0]) :
                        cipheredMessage.push(alphabet[j+13].toLowerCase())
                        break
                    } else {
                        let k = j+13 - 26
                        isUpperCase ? 
                        cipheredMessage.push(alphabet.slice(k,k+1)[0]) :
                        cipheredMessage.push(alphabet[k].toLowerCase())
                        break
                    }
                } else { continue }
            }
        } else {
            cipheredMessage.push(message[i])
        }
    }
    return cipheredMessage.join('')
}

console.log(rot13("Test"))