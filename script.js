function cosineLaw(sideA, sideB, angleC) {
    return Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angleC));
}
document.getElementById("calculateCosine").onclick = function (event) {
    event.preventDefault();

    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var angleC = parseFloat(document.getElementById("angleC").value) * (Math.PI / 180);

    var result = cosineLaw(sideA, sideB, angleC);
    document.getElementById("cosineResult").innerText = result;
}

function findAsymptote(nValue, mValue) {

}
document.getElementById("findAsymptote").onclick = function (event) {
    event.preventDefault();

    var nValue = parseFloat(document.getElementById("nValue").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
   
    var result = cosineLaw(sideA, sideB, angleC);
    document.getElementById("cosineResult").innerText = result.toFixed(2);
}