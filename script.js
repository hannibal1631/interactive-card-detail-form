// input variables
const nameInput = document.getElementById('name');
const cardInput = document.getElementById('card-num');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');
const confirmBtn = document.getElementById('confirm-btn');

// display variables
const nameDisplay = document.querySelector('.name-display');
const cardDisplay = document.querySelector('.card-number-display');
const monthDisplay = document.querySelector('.month-display');
const yearDisplay = document.querySelector('.year-display');
const cvcDisplay = document.querySelector('.cvc-num-display');

// error text variables
const nameError = document.querySelector('.name-error-text');
const cardError = document.querySelector('.card-error-text');
const dateError = document.querySelector('.date-error-text');
const cvcError = document.querySelector('.cvc-error-text');

// form and complete div
const formDiv = document.querySelector('.form-box');
const completeDiv = document.querySelector('.complete-state-div');
const resetBtn = document.querySelector('.reset-btn');

// Function to format the card number with spaces every 4 digits
function formatCardNumber(number) {
  return number.replace(/\d{4}(?=\d)/g, '$& ');
}

// confirm button eventListener to display input values
confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let success = true;

  //   store the value of the inputs in a variable
  const name = nameInput.value;
  const card = cardInput.value.replace(/\s+/g, '');
  const month = monthInput.value;
  const year = yearInput.value;
  const cvc = cvcInput.value;

  //   display name and show error text when empty
  if (name === '') {
    nameError.style.display = 'block';
    success = false;
  } else {
    nameError.style.display = 'none';
    nameDisplay.textContent = name;
  }

  //   display card number and show error text when empty or wrong
  if (/[a-zA-Z]/.test(card)) {
    cardError.style.display = 'block';
    cardError.textContent = `wrong format. numbers only.`;
    success = false;
  } else if (card === '') {
    cardError.style.display = 'block';
    cardError.textContent = `this success cannot be empty`;
    success = false;
  } else if (card.length !== 16) {
    // Check for exactly 16 digits
    cardError.style.display = 'block';
    cardError.textContent = `card number must be 16 digits`;
    success = false;
  } else {
    cardError.style.display = 'none';
    cardDisplay.textContent = formatCardNumber(card);
  }

  // dispaly date and show error text when empty
  if (month === '' || year === '') {
    dateError.style.display = 'block';
    success = false;
  } else {
    dateError.style.display = 'none';
    monthDisplay.textContent = month;
    yearDisplay.textContent = year;
  }

  // display cvc and show error text when empty
  if (cvc === '') {
    cvcError.style.display = 'block';
    success = false;
  } else {
    cvcError.style.display = 'none';
    cvcDisplay.textContent = cvc;
  }

  // display the thank you div when confirm
  if (success === true) {
    completeDiv.style.display = 'flex';
    formDiv.style.display = 'none';
  } else {
    completeDiv.style.display = 'none';
    formDiv.style.display = 'block';
  }
});

// reset the page
resetBtn.addEventListener('click', () => {
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
