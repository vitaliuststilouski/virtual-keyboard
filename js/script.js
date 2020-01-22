// make container for elements

var keyboardArray = [
    ['ё', '1', '2', '3', '4', '5', '6',
        '7', '8', '9', '10', '-', '+', 'Backspace'
    ],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ','\\', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#129033', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '&#129032', '&#129035', '&#129034', 'Ctrl']
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
            symbol.innerHTML = keyboardArray[i][j];

            symbol.classList.add('symbol');
            key.append(symbol);
            key.classList.add('keyShape');
            keyLine.append(key);

            if (keyboardArray[i][j] === 'Backspace') {
                key.classList.add('backspace')
            }

            if (keyboardArray[i][j] === 'Del') {
                key.classList.add('delete');
            }

            if (keyboardArray[i][j] === 'Enter') {
                key.classList.add('enter')
            }


            if (keyboardArray[i][j] === 'Tab') {
                key.classList.add('tab')
            }

            if (keyboardArray[i][j] === 'CapsLock') {
                key.classList.add('capslock')
            }

            if (keyboardArray[i][j] === 'Shift') {
                key.classList.add('shift-left')
            }

            if (keyboardArray[i][j] === '') {
                key.classList.add('space')
            }
        }
        document.querySelector('.keyboard').append(keyLine);
    }

}
makeKey();


var button = document.querySelectorAll