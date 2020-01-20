// make container for elements
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
    var keyboardArray = ['ё', '1', '2', '3', '4', '5', '6',
        '7', '8', '9', '10', '-', '+', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '&#129033',
        'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '&#129032', '&#129035', '&#129034'
    ]


    for (var i = 0; i < keyboardArray.length; i++) {
        var key = document.createElement('p')
        var symbol = document.createElement('span');
        symbol.innerHTML = keyboardArray[i];
        symbol.classList.add('symbol');
        key.append(symbol);
        key.classList.add('keyShape');

        if (keyboardArray[i] === 'Backspace') {
            key + '</br>'
        } else {
            document.querySelector('.keyboard').append(key);
        }
    }
}
makeKey();

// console.log(keyboardArray.length)