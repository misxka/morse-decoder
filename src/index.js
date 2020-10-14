const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let binaryLetters = expr.match(/.{1,10}/g);
    let result = '';
    for (let i = 0; i < binaryLetters.length; i++) {
        if (binaryLetters[i] === '**********') {
            result += ' ';
        } else {
            let binarySymbols = binaryLetters[i].match(/.{1,2}/g);
            let morseSymbol = '';
            for (let j = 0; j < binarySymbols.length; j++) {
                if (binarySymbols[j] === '10') {
                    morseSymbol += '.';
                } else if(binarySymbols[j] === '11') {
                    morseSymbol += '-';
                }
            }
            for (const key in MORSE_TABLE) {
                if (morseSymbol === key) {
                    result += MORSE_TABLE[key];
                }
            }
        }
    }
    return result;
}

console.log(decode('0000001111**********0000000010'));

module.exports = {
    decode
}