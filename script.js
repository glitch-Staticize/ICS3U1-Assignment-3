function cosineLaw(sideA, sideB, angleC) {
    return Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angleC));
}

document.getElementById("calculateCosine").onclick = function() {
    var sideA = parseInt(document.getElementById("sideA").value);
    var sideB = parseInt(document.getElementById("sideB").value);
    var angleC = parseInt(document.getElementById("angleC").value);

    var result = cosineLaw(sideA, sideB, angleC);
    document.getElementById("cosineResult").innerText=result.toFixed(2);
}

    



function asymptoteFinder(mValue, nValue)