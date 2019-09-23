function calcPlus() {
    let arg1 = document.getElementById("caculator-agr_1").value;
    let arg2 = document.getElementById("caculator-agr_2").value;
    let sumResult = arg1 + arg2;
    document.getElementById("caculated").value = sumResult;
}

function minus() {
    let arg1 = document.getElementById("caculator-agr_1").value;
    let arg2 = document.getElementById("caculator-agr_2").value;
    let sumResult = arg1 - arg2;
    document.getElementById("caculated").value = sumResult;
}
function multiply() {
    let arg1 = document.getElementById("caculator-agr_1").value;
    let arg2 = document.getElementById("caculator-agr_2").value;
    let sumResult = arg1 * arg2;
    document.getElementById("caculated").value = sumResult;
}
function share() {
    let arg1 = document.getElementById("caculator-agr_1").value;
    let arg2 = document.getElementById("caculator-agr_2").value;
    let sumResult = arg1 / arg2;
    document.getElementById("caculated").value = sumResult;
}