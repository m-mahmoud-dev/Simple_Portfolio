const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');


const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');


function clearError(input, errorElement) {
  input.addEventListener('input', () => {
    errorElement.textContent = '';
  });
}

clearError(nameInput, nameError);
clearError(emailInput, emailError);
clearError(passwordInput, passwordError);
clearError(confirmPasswordInput, confirmPasswordError);


function validateName() {
  const value = nameInput.value.trim();
  if (!value) {
    nameError.textContent = 'Name is required';
    return false;
  }
  nameError.textContent = '';
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    emailError.textContent = 'Email is required';
    return false;
  }
  if (!emailRegex.test(value)) {
    emailError.textContent = 'Enter a valid email address';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  if (!value) {
    passwordError.textContent = 'Password is required';
    return false;
  }
  if (value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
    return false;
  }
  passwordError.textContent = '';
  return true;
}

function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirm = confirmPasswordInput.value;
  if (!confirm) {
    confirmPasswordError.textContent = 'Please confirm your password';
    return false;
  }
  if (password !== confirm) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return false;
  }
  confirmPasswordError.textContent = '';
  return true;
}

// Form submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Always prevent default submission

  // Run all validations
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  // If all fields are valid, you can proceed (e.g., send data to server)
  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    // For demonstration, show success message and reset form
    alert('Form submitted successfully!');
    form.reset();
    // Optionally clear any remaining error messages (though they should be empty)
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  }
});