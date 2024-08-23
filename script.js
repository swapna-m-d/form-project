document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validation flags
    let isValid = true;

    // Clear previous error messages
    clearErrors();

  // Name validation
  if (fullName.length < 5) {
    document.getElementById('nameError').innerText = "Name must be at least 5 characters.";
    isValid = false;
}

// Email validation
if (!email.includes('@')) {
    document.getElementById('emailError').innerText = "Enter a valid email with '@'.";
    isValid = false;
}

// Phone number validation
if (phone.length !== 10 || isNaN(phone) || phone === "1234567890") {
    document.getElementById('phoneError').innerText = "Enter a valid 10-digit phone number.";
    isValid = false;
}

 // Password validation
 if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
    document.getElementById('passwordError').innerText = "Password must be at least 8 characters and not 'password' or your name.";
    isValid = false;
}

// Confirm password validation
if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
    isValid = false;
}

// If the form is valid, you can submit it or process the data
if (isValid) {
    alert('Form submitted successfully!');
}
});

function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
}