const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetErrors();
    if (validateName() && validateEmail() && validatePassword()) {
        alert("Form Submitted Successfully");
    }
});

function resetErrors() {
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";
}

function validateName() {
    const name = document.getElementById('name').value;
    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        nameError.classList.add('fade-in');
        return false;
    }
    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = "Write full Name";
        nameError.classList.add('fade-in');
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        emailError.classList.add('fade-in');
        return false;
    }
    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter Valid Email";
        emailError.classList.add('fade-in');
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value;
    if (password.length === 0) {
        passError.innerHTML = "Password is required";
        passError.classList.add('fade-in');
        return false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special Character";
        passError.classList.add('fade-in');
        return false;
    }
    return true;
}
