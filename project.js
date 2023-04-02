// Fahrenheit = celsius*1.8+32

function convert() {
    var celsius = document.getElementById("data").value;
    var fahrenheit =( celsius * 1.8 )+ 32;
    document.getElementById("response").innerHTML = `${celsius}°C =  ${fahrenheit}°F`;
}

function marks() {
    var maths = parseInt(document.getElementById("maths").value);
    var science = parseInt(document.getElementById("science").value);
    var hindi = parseInt(document.getElementById("hindi").value);
    var english = parseInt(document.getElementById("english").value);
    var sst = parseInt(document.getElementById("sst").value);
    var totalMarks = maths + science + hindi + english + sst;
    var percentage = (totalMarks * 100) / 500;

    document.getElementById('marks-response').innerText = `You got = ${percentage}%`
}


function meter() {
    var distance = parseInt(document.getElementById("distance").value);
    var km = (distance / 1000);
    document.getElementById('meter-response').innerText = `${distance}m = ${km}km`

}