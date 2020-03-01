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

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("Start", 250, 300);

  setTimeout(changeBackground, 1000);

}

function draw() {

  if(animating == true)
  ellipse(random(width), random(height), random(70, 350))

}


function changeBackground(){
  if (counter <= 5) {
    counter ++;
  background(random(255), random(255), random(255));
  setTimeout(changeBackground, 1000);
  } else {
    background(random(200,255));
    text("it's over", 250, 300);
  }
}

function randomizer(){
  animating = false;
  if (feelings[0]){
    background(random(200, 255));

    randomIndex = int(random(feelings.length));

    //console.log(feelings[randomIndex].alternative);
    text(feelings[randomIndex].alternative, 250, 300);
    //console.log(feelings[int(random(feelings.length))].alternative);

    feelings.splice(randomIndex,1);
    //console.log(feelings);
  } else {
    background(random(200, 255));
    text("Goodbye", 250, 300);
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}


}
