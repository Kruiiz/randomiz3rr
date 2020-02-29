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
   AM:"I'm tired",
   alternative: "I'm so tired"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

  randomIndex = int(random(feelings.length));

  //console.log(feelings[randomIndex].alternative);
  text(feelings[randomIndex].alternative, 250, 300);
  //console.log(feelings[int(random(feelings.length))].alternative);

  feelings.splice(randomIndex,1);
  //console.log(feelings);


}

function draw() {
  background(220);

}

function mousePressed() {
  background(random(200, 255));

  randomIndex = int(random(feelings.length));

  //console.log(feelings[randomIndex].alternative);
  text(feelings[randomIndex].alternative, 250, 300);
  //console.log(feelings[int(random(feelings.length))].alternative);

  feelings.splice(randomIndex,1);
  //console.log(feelings);



}
