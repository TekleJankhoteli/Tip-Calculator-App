
const billInput = document.querySelector('.billInputClass');
const tipButtons = document.querySelectorAll('.tipPercent button');
const customTipInput = document.querySelector('.buttonDivinput');
const numOfPeopleInput = document.querySelector('.inputOfpeople');
const tipAmountDisplay = document.querySelector('.tipamount2');
const totalDisplay = document.querySelector('.total2');
const resetButton = document.querySelector('.resetbutton');
const errorMessage = document.querySelector('.errorMessage');
const inputOfpeople=document.querySelector('.inputOfpeople')





function calculateTipAndTotal() {
  
  const billAmount = parseFloat(billInput.value);
  const numOfPeople = parseInt(numOfPeopleInput.value);

  if (numOfPeople === 0 || isNaN(numOfPeople)) {
    errorMessage.innerText = "can't be zero";
    errorMessage.style.color = 'red';
    inputOfpeople.style.borderColor = 'red';
    return; 
  } else {
    errorMessage.innerText = '';
    inputOfpeople.style.borderColor = '';
  }



  let tipPercent;
  if (customTipInput.value !== '') {
    tipPercent = parseFloat(customTipInput.value) / 100;
  } else {
    tipPercent = parseFloat(this.value) / 100 ;
  }
  const tipAmount = (billAmount * tipPercent) / numOfPeople;

 
  const totalAmount = billAmount / numOfPeople + tipAmount;

  tipAmountDisplay.textContent = `$ ${tipAmount.toFixed(2)}`;
  totalDisplay.textContent = `$ ${totalAmount.toFixed(2)}`;





   tipButtons.forEach((button) => {
    button.classList.remove('active');
  });


  this.classList.add('active');
  resetButton.classList.add('active');
  
}




function resetCalculator() {
  billInput.value = '';
  customTipInput.value = '';
  numOfPeopleInput.value = '';
  tipAmountDisplay.textContent = '$ 0.00';
  totalDisplay.textContent = '$ 0.00';
  tipButtons.forEach((button) => {
    button.classList.remove('active');
  });
  resetButton.classList.remove('active');

  errorMessage.innerText = '';
  numOfPeopleInput.style.borderColor = '';

}

billInput.addEventListener('input', function() {
    calculateTipAndTotal();
    resetButton.classList.add('active');
  });
  customTipInput.addEventListener('input', calculateTipAndTotal);
tipButtons.forEach((button) => {
  button.addEventListener('click', function() {
    calculateTipAndTotal.call(this); 
  });
});
numOfPeopleInput.addEventListener('input', calculateTipAndTotal);
resetButton.addEventListener('click', resetCalculator);