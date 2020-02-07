// make container for elements

var keyboardArray = [
    [{
            keyRU: 'ё',
            keyEn: '`',
            originalCode: 'Backquote'
        },
        {
            keyRU: '1',
            keyEn: '1',
            originalCode: 'Digit1'
        }, {
            keyRU: '2',
            keyEn: '2',
            originalCode: 'Digit2'
        }, {
            keyRU: '3',
            keyEn: '3',
            originalCode: 'Digit3'
        }, {
            keyRU: '4',
            keyEn: '4',
            originalCode: 'Digit4'
        }, {
            keyRU: '5',
            keyEn: '5',
            originalCode: 'Digit5'
        }, {
            keyRU: '6',
            keyEn: '6',
            originalCode: 'Digit6'
        }, {
            keyRU: '7',
            keyEn: '7',
            originalCode: 'Digit7'
        }, {
            keyRU: '8',
            keyEn: '8',
            originalCode: 'Digit8'
        },
        {
            keyRU: '9',
            keyEn: '9',
            originalCode: 'Digit9'
        }, {
            keyRU: '0',
            keyEn: '0',
            originalCode: 'Digit0'
        }, {
            keyRU: '-',
            keyEn: '-',
            originalCode: 'Minus'
        }, {
            keyRU: '=',
            keyEn: '=',
            originalCode: 'Equal'
        },
        {
            keyRU: 'Backspace',
            keyEn: 'Backspace',
            originalCode: 'Backspace'
        },
    ],
    [{
            keyRU: 'Tab',
            keyEn: 'Tab',
            originalCode: 'Tab'
        },
        {
            keyRU: 'й',
            keyEn: 'q',
            originalCode: 'KeyQ'
        }, {
            keyRU: 'ц',
            keyEn: 'w',
            originalCode: 'KeyW'
        }, {
            keyRU: 'у',
            keyEn: 'e',
            originalCode: 'KeyE'
        }, {
            keyRU: 'к',
            keyEn: 'r',
            originalCode: 'KeyR'
        }, {
            keyRU: 'е',
            keyEn: 't',
            originalCode: 'KeyT'
        }, {
            keyRU: 'н',
            keyEn: 'y',
            originalCode: 'KeyY'
        }, {
            keyRU: 'г',
            keyEn: 'u',
            originalCode: 'KeyU'
        }, {
            keyRU: 'ш',
            keyEn: 'i',
            originalCode: 'KeyI'
        },
        {
            keyRU: 'щ',
            keyEn: 'o',
            originalCode: 'KeyO'
        }, {
            keyRU: 'з',
            keyEn: 'p',
            originalCode: 'KeyP'
        }, {
            keyRU: 'х',
            keyEn: '[',
            originalCode: 'BracketLeft'
        },
        {
            keyRU: 'ъ',
            keyEn: ']',
            originalCode: 'BracketRight'
        }, {
            keyRU: '\\',
            keyEn: '\\',
            originalCode: 'Backslash'
        }, {
            keyRU: 'Del',
            keyEn: 'Del',
            originalCode: 'Delete'
        },
    ],
    [{
            keyRU: 'CapsLock',
            keyEn: 'CapsLock',
            originalCode: 'CapsLock'
        },
        {
            keyRU: 'a',
            keyEn: 'ф',
            originalCode: 'KeyA'
        }, {
            keyRU: 'ы',
            keyEn: 's',
            originalCode: 'KeyS'
        }, {
            keyRU: 'в',
            keyEn: 'd',
            originalCode: 'KeyD'
        }, {
            keyRU: 'а',
            keyEn: 'f',
            originalCode: 'KeyF'
        }, {
            keyRU: 'п',
            keyEn: 'g',
            originalCode: 'KeyG'
        }, {
            keyRU: 'р',
            keyEn: 'h',
            originalCode: 'KeyH'
        }, {
            keyRU: 'о',
            keyEn: 'j',
            originalCode: 'KeyJ'
        }, {
            keyRU: 'л',
            keyEn: 'k',
            originalCode: 'KeyK'
        },
        {
            keyRU: 'д',
            keyEn: 'l',
            originalCode: 'KeyL'
        }, {
            keyRU: 'ж',
            keyEn: ';',
            originalCode: 'Semicolon'
        }, {
            keyRU: 'э',
            keyEn: '\'',
            originalCode: 'Quote'
        },
        {
            keyRU: 'Enter',
            keyEn: 'Enter',
            originalCode: 'Enter'
        },
    ],

    [{
            keyRU: 'Shift',
            keyEn: 'Shift',
            originalCode: 'ShiftLeft'
        },
        {
            keyRU: 'я',
            keyEn: 'z',
            originalCode: 'KeyZ'
        }, {
            keyRU: 'ч',
            keyEn: 'x',
            originalCode: 'KeyX'
        }, {
            keyRU: 'с',
            keyEn: 'c',
            originalCode: 'KeyC'
        }, {
            keyRU: 'м',
            keyEn: 'v',
            originalCode: 'KeyV'
        }, {
            keyRU: 'и',
            keyEn: 'b',
            originalCode: 'KeyB'
        }, {
            keyRU: 'т',
            keyEn: 'n',
            originalCode: 'KeyN'
        }, {
            keyRU: 'ь',
            keyEn: 'm',
            originalCode: 'KeyM'
        }, {
            keyRU: 'б',
            keyEn: ',',
            originalCode: 'Comma'
        },
        {
            keyRU: 'ю',
            keyEn: '.',
            originalCode: 'P'
        },
        {
            keyRU: '&#129033',
            keyEn: '&#129033',
            originalCode: 'ArrowUp'
        },
        {
            keyRU: 'Shift',
            keyEn: 'Shift',
            originalCode: 'ShiftRight'
        }
    ],
    // ['Ctrl', 'Win', 'Alt', '', 'Alt', '&#129032', '&#129035', '&#129034', 'Ctrl']

    [{
            keyRU: 'Ctrl',
            keyEn: 'Ctrl',
            originalCode: 'ControlLeft'
        },
        {
            keyRU: 'Win',
            keyEn: 'Win',
            originalCode: 'MetaLeft'
        }, {
            keyRU: 'Alt',
            keyEn: 'Alt',
            originalCode: 'AltLeft'
        }, {
            keyRU: '',
            keyEn: '',
            originalCode: 'Space'
        }, {
            keyRU: '&#129032',
            keyEn: '&#129032',
            originalCode: 'ArrowLeft'
        }, {
            keyRU: '&#129035',
            keyEn: '&#129035',
            originalCode: 'ArrowDown'
        }, {
            keyRU: '&#129034',
            keyEn: '&#129034',
            originalCode: 'ArrowRight'
        }, {
            keyRU: 'Ctrl',
            keyEn: 'Ctrl',
            originalCode: 'ArrowRight'
        }
    ]
];

function makeContainer() {
    var container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);
}
makeContainer();

// show display for  reflecting
function showDisplay() {
    var textArea = document.createElement('textarea');
    textArea.setAttribute('rows', 20);
    textArea.setAttribute('cols', 100);
    textArea.classList.add('display');
    document.querySelector('.container').prepend(textArea);
}
showDisplay();

// make keyboard

function showKeyboard() {
    var keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    document.querySelector('.container').append(keyboard);
}
showKeyboard();


function makeKey() {
    //add line
    for (var i = 0; i < keyboardArray.length; i++) {
        var keyLine = document.createElement('div');
        keyLine.classList.add('line');
        for (var j = 0; j < keyboardArray[i].length; j++) {
            var key = document.createElement('div');
            var symbol = document.createElement('span');
            symbol.innerHTML = keyboardArray[i][j]['keyRU'];

            symbol.classList.add('symbol');
            key.append(symbol);
            key.classList.add('keyShape');
            keyLine.append(key);

            if (keyboardArray[i][j]['keyRU'] === 'Backspace') {
                key.classList.add('backspace')
            }

            if (keyboardArray[i][j]['keyRU'] === 'Del') {
                key.classList.add('delete');
            }

            if (keyboardArray[i][j]['keyRU'] === 'Enter') {
                key.classList.add('enter')
            }


            if (keyboardArray[i][j]['keyRU'] === 'Tab') {
                key.classList.add('tab')
            }

            if (keyboardArray[i][j]['keyRU'] === 'CapsLock') {
                key.classList.add('capslock')
            }

            if (keyboardArray[i][j]['keyRU'] === 'Shift') {
                key.classList.add('shift-left')
            }

            if (keyboardArray[i][j]['keyRU'] === '') {
                key.classList.add('space')
            }
        }
        document.querySelector('.keyboard').append(keyLine);
    }

}
makeKey();

// make autofocus in input
function autoFocus() {
    document.querySelector('.display').focus();
}

autoFocus();


document.addEventListener('keydown', function (event) {
    if (event.code === keyboardArray[0][1]['originalCode']) {
        keyboardArray[0][1]['originalCode']
    }
})

var buttons = Array.from(document.querySelectorAll('.keyShape'));
console.log(buttons)

var letter = buttons.forEach(function (element) {
    console.log(element)
})

// console.log(element)