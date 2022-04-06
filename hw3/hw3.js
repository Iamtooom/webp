setInterval("print()", "400");

document.addEventListener('keydown', delChar);

var temp = '';

function print() {
    var result = Math.floor(Math.random() * 26);
    var charOut = String.fromCharCode(result + 65);

    text = document.getElementById("text");
    text.innerHTML = charOut + text.innerHTML;
}

function delChar(e) {
    var lastWord = text.innerHTML.substr(-1);

    if (lastWord == e.key) {
        text.innerHTML = text.innerHTML.substr(0, text.innerHTML.length - 1);
    }
}