const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            result += ' ';
            continue;
        }

        let letter = '';
        for (let j = i; j < i + 10; j += 2) {       
            switch (expr.slice(j, j + 2)) {
                case '10':
                    letter += '.';
                    break;
                case '11':
                    letter += '-';
                    break;                   
            
                default:
                    break;
            }            
        }        
                 
        result += MORSE_TABLE[letter];
    }

    return result;
}

module.exports = {
    decode
}