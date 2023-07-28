// Get DOM elements
const inputField = document.getElementById('cardName');
const outputElement = document.getElementById('p1');

const HoldeName = document.getElementById('cardnumber');
const Nameoutput = document.getElementById('output');

const Month = document.getElementById('MM');
const Para1= document.getElementById('p2');

const Year = document.getElementById('YY');
const PY= document.getElementById('p3');

const CV = document.getElementById('cvc');
const Pcvc= document.getElementById('p4');



// Add an event listener to the input field
inputField.addEventListener('input', updateOutput);
HoldeName.addEventListener('input',updateOutput);
Month.addEventListener('input',updateOutput);
Year.addEventListener('input',updateOutput);
CV.addEventListener('input',updateOutput);

// Function to update the output element
function updateOutput() {
  const inputValue = inputField.value;
  outputElement.textContent = inputValue;

  const inputval=HoldeName.value;
  Nameoutput.textContent=inputval;

  const inputval2=Month.value;
  Para1.textContent=inputval2;

  const inputval3 = Year.value;
  PY.textContent=inputval3;

  const inputvalue4 = CV.value;
  Pcvc.textContent = inputvalue4;

}



// const myForm = document.getElementById('credit-card-form');
// const thankYouSection = document.getElementById('thankYouSection');

// myForm.addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent form submission and page reload
//   showThankYouMessage();
// });

// function showThankYouMessage() {
//   myForm.classList.add('hidden'); // Hide the form
//   thankYouSection.classList.remove('hidden'); // Show the thank you message/image
// }
