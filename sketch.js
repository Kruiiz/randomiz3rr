//myFeelings
let feelings = [{
   dawn:"yee",
   alternative: "fuck"
}, {
   morning:"8^P"
}, {
   noon:"Not sure"
}, {
   evening:"sad?"
}, {
   AM:"I'm tired"
}];

function setup() {
  createCanvas(600, 600);
  background(200);


  console.log(feelings[int(random(feelings.length))]);


}

function draw() {
  background(220);
}
