var counter = 0;
var colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8b00ff"];

function setup() {
    setInterval(changeColor, 500);
}

function changeColor() {
    var body = document.body;
    body.style.backgroundColor = colors[counter];

    if(counter == 6) {
        counter = 0;
    } else {
        counter++;
    }
}
