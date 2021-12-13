/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  duration: 500,
  reset: false
});

scrollReveal.reveal(
  `header img, .text h2,
  .text h3, .text p,
  #email-label, .input-btn,
  .back
  `,
  { interval: 100, easing: 'ease-out', scale: 0.85 }
);

/* Script => 
validação de formulário */

const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('form');
const errorText = document.querySelector('.error-text');
const emailField = document.querySelector('input[type=email]');

function addError() {
  emailField.classList.add('error-email');
  errorText.textContent = 'Hey! Você deve inserir um e-mail válido antes de enviá-lo.';
}

function customValidation(event) {
  const field = event.target;

  // validações do email
  if (emailField.value === '') {
    addError();
  } else if (emailField.value.indexOf('@') == -1 || emailField.value.indexOf('.') == -1 || emailField.value.indexOf('.') - emailField.value.indexOf('@') == 1) {
    addError();
  } else {
    form.submit();
  }

  // trocar mensagem de required
  field.setCustomValidity('Ops, seu e-mail deve ter esse formato: oi@rocketseat.com. Confere aí!');
}

emailField.addEventListener('invalid', customValidation);

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
});
