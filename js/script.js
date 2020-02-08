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
            keyRU: 'ф',
            keyEn: 'a',
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
            originalCode: 'Period'
        },
        {
            keyRU: '.',
            keyEn: '/',
            originalCode: 'Slash'
        },
        {
            keyRU: '🠉',
            keyEn: '🠉',
            originalCode: 'ArrowUp'
        },
        {
            keyRU: 'Shift',
            keyEn: 'Shift',
            originalCode: 'ShiftRight'
        }
    ],
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
            keyRU: ' ',
            keyEn: ' ',
            originalCode: 'Space'
        }, {
            keyRU: 'Alt',
            keyEn: 'Alt',
            originalCode: 'AltRight'
        },

        {
            keyRU: '🠈',
            keyEn: '🠈',
            originalCode: 'ArrowLeft'
        }, {
            keyRU: '🠋',
            keyEn: '🠋',
            originalCode: 'ArrowDown'
        }, {
            keyRU: '🠊',
            keyEn: '🠊',
            originalCode: 'ArrowRight'
        }, {
            keyRU: 'Ctrl',
            keyEn: 'Ctrl',
            originalCode: 'ControlRight'
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

            if (keyboardArray[i][j]['originalCode'] === 'Backspace') {
                key.classList.add('backspace');
            }

            if (keyboardArray[i][j]['originalCode'] === 'Delete') {
                key.classList.add('delete');
            }

            if (keyboardArray[i][j]['originalCode'] === 'Enter') {
                key.classList.add('enter');
            }


            if (keyboardArray[i][j]['originalCode'] === 'Tab') {
                key.classList.add('tab');
            }

            if (keyboardArray[i][j]['originalCode'] === 'CapsLock') {
                key.classList.add('capslock');
            }

            if (keyboardArray[i][j]['originalCode'] === 'ShiftLeft') {
                key.classList.add('shift-left');
                key.setAttribute('data-about', 'ShiftLeft');
            }

            if (keyboardArray[i][j]['originalCode'] === 'ShiftRight') {
                key.classList.add('shift-right');
                key.setAttribute('data-about', 'ShiftRight');
            }

            if (keyboardArray[i][j]['originalCode'] === 'AltLeft') {
                key.setAttribute('data-about', 'AltLeft');
            }

            if (keyboardArray[i][j]['originalCode'] === 'AltRight') {
                key.setAttribute('data-about', 'AltRight');
            }


            if (keyboardArray[i][j]['originalCode'] === 'ControlLeft') {
                key.setAttribute('data-about', 'ControlLeft');
            }

            if (keyboardArray[i][j]['originalCode'] === 'ControlRight') {
                key.setAttribute('data-about', 'ControlRight');
            }

            if (keyboardArray[i][j]['originalCode'] === 'Space') {
                key.classList.add('space');
            }
        }
        document.querySelector('.keyboard').append(keyLine);
    }

}
makeKey();

// make array from pseudo-array
var buttons = [].slice.call(document.querySelectorAll('.keyShape'));


// concat array
var concatKeyboardArray = [].concat.apply([], keyboardArray); // to do

// make autofocus in input
function autoFocus() {
    document.querySelector('.display').focus();
}
autoFocus();

document.addEventListener('keydown', function (event) {
    // console.log(event.getModifierState('CapsLock'))
    console.log(event.location)

    function checkKey() {
        var pressedButton = concatKeyboardArray.find(function (element) {
            if (element['originalCode'] === event.code) {
                return element;
            }
        })
        var letterRU = pressedButton['keyRU'];
        var letterEn = pressedButton['keyEn'];
        var originalCode = pressedButton['originalCode'];

        buttons.forEach(function (el) {
            if (originalCode === el.dataset.about) {
                el.style.backgroundColor = 'red';
            }
            if (letterRU === el.textContent && event.location === 0) {
                el.style.backgroundColor = 'red';
            }
            if (originalCode === 'MetaLeft' && event.location === 1 && letterRU === el.textContent) {
                el.style.backgroundColor = 'red';
            }
            if (originalCode === 'Tab') {
                event.preventDefault();
            }
            if (originalCode === 'CapsLock') {
                if (event.getModifierState('CapsLock')) {

                }
            }
        });
    }
    checkKey();
})

document.addEventListener('keyup', function (event) {
    function checkKey() {
        buttons.forEach(function (el) {
            el.style.backgroundColor = '';
            el.removeAttribute('style');
        });
    }
    checkKey();
})