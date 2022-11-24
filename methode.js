let result = document.getElementById('result');
let un = document.getElementById('un');
let deux = document.getElementById('deux');
let trois = document.getElementById('trois');
let quatre = document.getElementById('quatre');
let cinq = document.getElementById('cinq');
let six = document.getElementById('six');
let sept = document.getElementById('sept');
let huite = document.getElementById('huite');
let neuf = document.getElementById('neuf');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let moins = document.getElementById('moins');
let multi = document.getElementById('multi');
let modulo = document.getElementById('modulo');
let egale = document.getElementById('egale');
let reset = document.getElementById('reset');

un.addEventListener("click", function () {
    result.value += 1;
})

deux.addEventListener("click", function () {
    result.value += 2;
})

trois.addEventListener("click", function () {
    result.value += 3;
})

quatre.addEventListener("click", function () {
    result.value += 4;
})

cinq.addEventListener("click", function () {
    result.value += 5;
})

six.addEventListener("click", function () {
    result.value += 6;
})

sept.addEventListener("click", function () {
    result.value += 7;
})

huite.addEventListener("click", function () {
    result.value += 8;
})

neuf.addEventListener("click", function () {
    result.value += 9;
})

zero.addEventListener("click", function () {
    result.value += 0;
})

plus.addEventListener("click", function () {
    result.value += "+";
})

moins.addEventListener("click", function () {
    result.value += "-";
})

multi.addEventListener("click", function () {
    result.value += "*";
})

modulo.addEventListener("click", function () {
    result.value += "%";
})

egale.addEventListener("click", function () {
    result.value = eval(result.value);
})

reset.addEventListener("click", function () {
    result.value = "";
})