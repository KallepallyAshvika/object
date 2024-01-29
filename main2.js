img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center
}
function preload() {
img = loadImage('fruit.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fruit", 45, 75 );
    noFill();
    stroke("#FF0000")
    rect(45, 55 , 450, 365);
    if(status !="")
    {
        for (i =0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +" " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
    
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

