// getNumber
function getNumber(num) {
    var output = document.getElementById("result")
    output.value += num
}

// calculator
function cal() {
    var output = document.getElementById("result")
    output.value = eval(output.value)
}

// clear
function clearResult() {
    var output = document.getElementById("result");
    output.value = "";
}