function validationForm() {
    // Retrieve form input values
    let FullName = document.getElementById('FullName').value;
    let location = document.getElementById('RoP').value;
    let gender = document.getElementById('gender').value;
    let Password = document.getElementById('Password').value;
    let EBG = document.getElementById('EBG').value;
    let ConfirmPassword = document.getElementById('ConfirmPassword').value;
    let WE = document.getElementById('WE').value;
    let email = document.getElementById('email').value;

    // Reset error messages
    document.getElementById('FullNameError').textContent = '';
    document.getElementById('RoPError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('EBGError').textContent = '';
    document.getElementById('WEError').textContent = '';
    document.getElementById('PasswordError').textContent = '';
    document.getElementById('ConfirmPasswordError').textContent = '';
    document.getElementById('EmailError').textContent = '';


    let isValid = true;

    // Validate FullName field
    if (FullName.trim() === '') {
        document.getElementById('FullNameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate  location field
    if (location.trim() === '') {
        document.getElementById('RoPError').textContent = 'required';
        isValid = false;
    }
    
    
    // Validate gender field
    if (gender.trim() === '') {
        document.getElementById('genderError').textContent = 'required';
        isValid = false;
    }
      
    // Validate working exprience field
    if (WE.trim() === '') {
        document.getElementById('WEError').textContent = 'required';
        isValid = false;
    }
    
    // Validate education field
    if (EBG.trim() === '') {
        document.getElementById('EBGError').textContent = 'required';
        isValid = false;
    }
    
    // Validate password field
    if (Password.trim() === '') {
        document.getElementById('PasswordError').textContent = 'required';
        isValid = false;
    }
    
    // Validate Confirm Password field
    if (ConfirmPassword.trim() === '') {
        document.getElementById('ConfirmPasswordError').textContent = 'required';
        isValid = false;
    }


    // Validate email field
    if (email.trim() === '') {
        document.getElementById('EmailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('EmailError').textContent = 'Invalid email format';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Regular expression to validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
