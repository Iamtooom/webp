setInterval("print()", "1000");
setInterval("print1()", "1000");
setInterval("print2()", "1000");
setInterval("print3()", "1000");
setInterval("print4()", "1000");
setInterval("print5()", "1000");

document.addEventListener('keydown', delChar);

var temp = '';

function print() {
    var result = Math.floor(Math.random() * 26);
    var charOut = String.fromCharCode(result + 65);

    text= document.getElementById("text");
    text.innerHTML = charOut + text.innerHTML;
}
function print1() {
  var result = Math.floor(Math.random() * 26);
  var charOut = String.fromCharCode(result + 65);

  text1= document.getElementById("text1");
  text1.innerHTML = charOut + text1.innerHTML;
}
function print2() {
  var result = Math.floor(Math.random() * 26);
  var charOut = String.fromCharCode(result + 65);

  text2 = document.getElementById("text2");
  text2.innerHTML = charOut + text2.innerHTML;
}
function print3() {
  var result = Math.floor(Math.random() * 26);
  var charOut = String.fromCharCode(result + 65);

  text3 = document.getElementById("text3");
  text3.innerHTML = charOut + text3.innerHTML;
}
function print4() {
  var result = Math.floor(Math.random() * 26);
  var charOut = String.fromCharCode(result + 65);

  text4 = document.getElementById("text4");
  text4.innerHTML = charOut + text4.innerHTML;
}
function print5() {
  var result = Math.floor(Math.random() * 26);
  var charOut = String.fromCharCode(result + 65);

  text5 = document.getElementById("text5");
  text5.innerHTML = charOut + text5.innerHTML;
}


function delChar(e) {
  var lastWord = text.innerHTML.substr(-1);

  if (lastWord == e.key) {
      text.innerHTML = text.innerHTML.substr(0, text.innerHTML.length - 1);
  }
  var lastWord = text1.innerHTML.substr(-1);

  if (lastWord == e.key) {
      text1.innerHTML = text1.innerHTML.substr(0, text1.innerHTML.length - 1);
  }
  var lastWord = text2.innerHTML.substr(-1);

  if (lastWord == e.key) {
      text2.innerHTML = text2.innerHTML.substr(0, text2.innerHTML.length - 1);
  }
  var lastWord = text3.innerHTML.substr(-1);

  if (lastWord == e.key) {
      text3.innerHTML = text3.innerHTML.substr(0, text3.innerHTML.length - 1);
  }
  var lastWord = text4.innerHTML.substr(-1);

  if (lastWord == e.key) {
      text4.innerHTML = text4.innerHTML.substr(0, text4.innerHTML.length - 1);
  }
  var lastWord = text5.innerHTML.substr(-1);

  if (lastWord == e.key) {
      text5.innerHTML = text5.innerHTML.substr(0, text5.innerHTML.length - 1);
  }
}