
function validateForm() {
    // Retrieve form input values
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var nextOfKin = document.getElementById('nextOfKin').value;
    var nin = document.getElementById('nin').value;
    var recommender = document.getElementById('recommender').value;
    var education = document.getElementById('education').value;
    var sitterNumber = document.getElementById('sitterNumber').value;
    var phone1 = document.getElementById('phone1').value;
    var email = document.getElementById('email').value;

    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('locationError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('nextOfKinError').textContent = '';
    document.getElementById('ninError').textContent = '';
    document.getElementById('recommenderError').textContent = '';
    document.getElementById('educationError').textContent = '';
    document.getElementById('sitterNumberError').textContent = '';
    document.getElementById('phone1Error').textContent = '';
    document.getElementById('emailError').textContent = '';


    var isValid = true;

    // Validate name field
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate  location field
    if (location.trim() === '') {
        document.getElementById('locationError').textContent = 'required';
        isValid = false;
    }
    
    // Validate dob field
    if (dob.trim() === '') {
        document.getElementById('dobError').textContent = 'required';
        isValid = false;
    }
    
    // Validate gender field
    if (gender.trim() === '') {
        document.getElementById('genderError').textContent = 'required';
        isValid = false;
    }
    
    // Validate nextOfKin field
    if (nextOfKin.trim() === '') {
        document.getElementById('nextOfKinError').textContent = 'required';
        isValid = false;
    }
    
    // Validate nin field
    if (nin.trim() === '') {
        document.getElementById('ninError').textContent = 'required';
        isValid = false;
    }
    
    // Validate recommender field
    if (recommender.trim() === '') {
        document.getElementById('recommenderError').textContent = 'required';
        isValid = false;
    }
    
    // Validate education field
    if (education.trim() === '') {
        document.getElementById('educationError').textContent = 'required';
        isValid = false;
    }
    
    // Validate sitterNumber field
    if (sitterNumber.trim() === '') {
        document.getElementById('sitterNumberError').textContent = 'required';
        isValid = false;
    }
    
    // Validate phone1 field
    if (phone1.trim() === '') {
        document.getElementById('phone1Error').textContent = 'required';
        isValid = false;
    }


    // Validate email field
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Regular expression to validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
