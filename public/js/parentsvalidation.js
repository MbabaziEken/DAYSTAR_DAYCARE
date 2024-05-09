
function validationForm() {
    // Retrieve form input values
    let Parentsname = document.getElementById('Parentsname').value;
    let location = document.getElementById('location').value;
    let Age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let BabyName = document.getElementById('BabyName').value;
    let NextOfKin = document.getElementById('NextOfKin').value;
    let nin = document.getElementById('nin').value;
    let NextOfKinsContact = document.getElementById('NextOfKinsContact').value;
    let Contact = document.getElementById('Contact').value;

    // Reset error messages
    document.getElementById('ParentsnameError').textContent = '';
    document.getElementById('locationError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('NextOfKinError').textContent = '';
    document.getElementById('ninError').textContent = '';
    document.getElementById('NextOfKinsContactError').textContent = '';
    document.getElementById('BabyNameError').textContent = '';
    document.getElementById('ContactError').textContent = '';


    var isValid = true;

    // Validate name field
    if (Parentsname.trim() === '') {
        document.getElementById('ParentsnameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate  location field
    if (location.trim() === '') {
        document.getElementById('locationError').textContent = 'required';
        isValid = false;
    }
    
    // Validate dob field
    if (Age.trim() === '') {
        document.getElementById('ageError').textContent = 'required';
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
        
    // Validate education field
    if (NextOfKinsContact.trim() === '') {
        document.getElementById('NextOfKinsContactError').textContent = 'required';
        isValid = false;
    }
    
    // Validate sitterNumber field
    if (BabyName.trim() === '') {
        document.getElementById('BabyNameError').textContent = 'required';
        isValid = false;
    }
    
    // Validate Contact field
    if (Contact.trim() === '') {
        document.getElementById('ContactError').textContent = 'required';
        isValid = false;
    }



    return isValid;
}

