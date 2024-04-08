const counterValue = document.getElementById('counter');
function increment(){
  // Get the value from UI
  let value = parseInt(counterValue.innerText);
  // Update the Value
  value = value +1;
  // Set it back to the UI
counterValue.innerText = value;
};

function decrement(){
  // Get the value from UI
  let value = parseInt(counterValue.innerText);
  // Update the Value
  value = value -1;
  // Set it back to the UI
counterValue.innerText = value;
};