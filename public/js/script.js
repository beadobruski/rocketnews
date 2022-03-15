/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  duration: 500,
  reset: false,
});

scrollReveal.reveal(
  `header img, .text h2,
  .text h3, .text p,
  #email-label, .input-btn,
  .back
  `,
  { interval: 100, easing: 'ease-out', scale: 0.85 }
);

/* validação de formulário */

const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('form');
const errorText = document.querySelector('.error-text');
const emailField = document.querySelector('input[type=email]');

function addError() {
  emailField.classList.add('error-email');
  errorText.textContent =
    'Hey! Você deve inserir um e-mail válido antes de enviá-lo.';
}

function customValidation() {
  const emailFieldValue = emailField.value;

  if (emailFieldValue === '') {
    addError();
  } else if (!checkEmail(emailFieldValue)) {
    addError();
  } else {
    alert('Boa! Você receberá notícias todo final de semana!');
    form.submit();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  customValidation();
});

// !Regex
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
