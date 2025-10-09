// script.js
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('senha');

if (togglePassword && passwordField) {
  togglePassword.addEventListener('click', () => {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
  });
}
