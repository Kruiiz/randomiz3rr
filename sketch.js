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

function setup() {
  createCanvas(600, 600);
  background(200);


  console.log(feelings[int(random(feelings.length))].alternative);


}

function draw() {
  background(220);
}
