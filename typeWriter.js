var i = 0;
var line = 'at consectetur ex cursus eget. Proin placerat aliquet sapien.';
var speed = 100;

function typeWriter() {
  if (i < line.length) {
    document.getElementById("typer").innerHTML += line.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
