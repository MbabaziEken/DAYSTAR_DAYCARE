function validationForm() {
    // Retrieve form input values
    let ParentsName = document.getElementById('ParentsName').value;
    let BabyName = document.getElementById('BabyName').value;
    let Location = document.getElementById('Location').value;
    let Age = document.getElementById('Age').value;
    let Gender = document.getElementById('Gender').value;
    let nin = document.getElementById('nin').value;
    let Contact = document.getElementById('Contact').value;
    let NextOfKin = document.getElementById('NextOfKin').value;
    let NextOfKinsContact = document.getElementById('NextOfKinsContact').value;
    // Reset error messages
    document.getElementById('ParentsNameError').textContent = '';
    document.getElementById('BabyNameError').textContent = '';
    document.getElementById('AgeError').textContent = '';
    document.getElementById('GenderError').textContent = '';
    document.getElementById('ninError').textContent = '';
    document.getElementById('LocationError').textContent = '';
    document.getElementById('ContactError').textContent = '';
    document.getElementById('NextOfKinError').textContent = '';
    document.getElementById('NextOfKinsContactError').textContent = '';


    let isValid = true;

    // Validate ParentsName field
    if (ParentsName.trim() === '') {
        document.getElementById('ParentsNameError').textContent = 'ParentsName is required';
        isValid = false;
    }
    
    // Validate  BabyName field
    if (BabyName.trim() === '') {
        document.getElementById('BabyNameError').textContent = 'BabyName is required';
        isValid = false;
    }
    
    // Validate Age field
    if (Age.trim() === '') {
        document.getElementById('AgeError').textContent = 'Age is required';
        isValid = false;
    }
    
    // Validate Gender field
    if (Gender.trim() === '') {
        document.getElementById('GenderError').textContent = 'Gender is required';
        isValid = false;
    }
    
    
    // Validate nin field
    if (nin.trim() === '') {
        document.getElementById('ninError').textContent = 'nin field is required';
        isValid = false;
    }
    
    // Validate recommender field
    if (Location.trim() === '') {
        document.getElementById('LocationError').textContent = 'Location field is required';
        isValid = false;
    }
    
    // Validate education field
    if (Contact.trim() === '') {
        document.getElementById('ContactError').textContent = 'Contact field is required';
        isValid = false;
    }
    
    // Validate sitterNumber field
    if (NextOfKin.trim() === '') {
        document.getElementById('NextOfKinError').textContent = 'NextOfKin is required';
        isValid = false;
    }
    
    // Validate NextOfKinsContact field
    if (NextOfKinsContact.trim() === '') {
        document.getElementById('NextOfKinsContactError').textContent = 'NextOfKinsContact field is required';
        isValid = false;
    }

    return isValid;
};

