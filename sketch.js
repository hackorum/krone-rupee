var input, button, sentence;
var y = 65;

function setup() {
   createCanvas(710, 400);

   input = createInput();
   input.position(20, 65);

   button = createButton('convert');
   button.position(input.x + input.width, 65);
   button.mousePressed(KroneInRupee);

   sentence = createElement('h2', 'Enter amount in Danish Krones:');
   sentence.position(20, 5);

   textAlign(CENTER);
   textSize(50);
}

async function KroneInRupee() {
  const krone = input.value();
  var response = await fetch("https://api.exchangeratesapi.io/latest?base=DKK");
  var responseJSON = await response.json();
  var rates = responseJSON.rates;
  var inr = rates.INR;

  // sentence.html('Amount in ₹upees: ' + krone*inr);

  y+=25;
  var convertedvalue = createP(krone*inr);
  convertedvalue.position(20,y);
  input.value('');


}
