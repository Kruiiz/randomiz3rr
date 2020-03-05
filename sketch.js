//myFeelings
let feelings = [{
  dawn: "yee",
  alternative: "fuck"
}, {
  morning: "8^P",
  alternative: "I feel so empty"
}, {
  noon: "Not sure",
  alternative: "I don't know who I am"
}, {
  evening: "sad?",
  alternative: "What's the point?"
}, {
  end: "I'm tired",
  alternative: "I'm so tired"
}];

let randomIndex;
let animating = false;
let crew = [];
let imageCounter = 1;
let button;

function preload() {

  for (let i = 1; i <= 5; i++) {
    crew[i] = loadImage(`images/crew_${i}.JPG`)
  }

}

function setup() {
  createCanvas(600, 600);
  background(251, 201, 222);
  textSize(32);
  textFont('Bahnschrift Light Condensed');
  textAlign(CENTER);
  fill(255)
  imageMode(CENTER);
  frameRate(8);

  text("Start", 250, 300);

  button = createButton("click pls for a wild time");
  button.mousePressed(buttonPressed);
  button.class("daButton")
}

function draw() {

  if (animating == true)
    clear();
    image(crew[imageCounter], width / 2, height / 2);

  if (imageCounter < crew.length - 1) {
    imageCounter++;
  } else {
    imageCounter = 0;
  }
}

function randomizer() {
  animating = false;
  if (feelings[0]) {
    //background(random(200, 255));
    clear();
    randomIndex = int(random(feelings.length));
    //console.log(feelings[randomIndex].alternative);
    image(random(crew), width / 2, height / 2);
    text(feelings[randomIndex].alternative,
    width/2, height - 70);
    //${feelings[randomIndex].evening}`, 50, 200);
    //text(feelings[randomIndex].alternative + "What's happening?" +
    //feelings[randomIndex].evening, 250, 300);
    //console.log(feelings[int(random(feelings.length))].alternative);

    feelings.splice(randomIndex, 1);
    //console.log(feelings);
  } else {
    background(random(200, 255));
    text("Goodbye", 250, 300);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
