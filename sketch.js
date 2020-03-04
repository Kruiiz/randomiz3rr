//myFeelings
let feelings = [{
   dawn:"yee",
   alternative: "fuck"
}, {
   morning:"8^P",
   alternative: "I feel so empty"
}, {
   noon:"Not sure",
   alternative: "I don't know who I am"
}, {
   evening:"sad?",
   alternative: "What's the point?"
}, {
   end:"I'm tired",
   alternative: "I'm so tired"
}];

let randomIndex;
let animating = false;
let crew = [];

function preload(){

for (let im = 0; i <= 5, i++) {
  crew[i] = loadImage(`images/crew${i}.JPG`)
}

}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("Start", 250, 300);
  console.log(crew);

}

function draw() {

  if(animating == true)
  ellipse(random(width), random(height), random(70, 350))

}

function randomizer() {
  animating = false;
  if (feelings[0]){
    background(random(200, 255));

    randomIndex = int(random(feelings.length));

    //console.log(feelings[randomIndex].alternative);
    text(`${feelings[randomIndex].alternative}  What's happening?

    ${feelings[randomIndex].evening}`, 50, 200);
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

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
