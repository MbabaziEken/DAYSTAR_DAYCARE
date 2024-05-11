// function validationForm() {
//     // Retrieve form input values
//     let name = document.getElementById('name').value;
//     let location = document.getElementById('location').value;
//     let age = document.getElementById('age').value;
//     let gender = document.getElementById('gender').value;
//     let nextOfKin = document.getElementById('nextOfKin').value;
//     let nin = document.getElementById('nin').value;
//     let recommender = document.getElementById('recommender').value;
//     let education = document.getElementById('education').value;
//     // let sitternumber = document.getElementById('sitterNumber').value;
//     let recommenderscontact = document.getElementById('recommenderscontact').value;
//     // let religion = document.getElementById('religion').value;
//     let contact = document.getElementById('contact').value;

//     // Reset error messages
//     document.getElementById('nameError').textContent = '';
//     document.getElementById('locationError').textContent = '';
//     document.getElementById('ageError').textContent = '';
//     document.getElementById('genderError').textContent = '';
//     document.getElementById('nextofkinError').textContent = '';
//     document.getElementById('ninError').textContent = '';
//     document.getElementById('recommendersnameError').textContent = '';
//     document.getElementById('eduError').textContent = '';
//     // document.getElementById('sitterNumberError').textContent = '';
//     document.getElementById('recommenderscontactError').textContent = '';
//     // document.getElementById('religionError').textContent = '';
//     document.getElementById('contactError').textContent = '';


//     let isValid = true;

//     // Validate name field
//     if (name.trim() === '') {
//         document.getElementById('nameError').textContent = 'Name is required';
//         isValid = false;
//     }
    
//     // Validate  location field
//     if (location.trim() === '') {
//         document.getElementById('locationError').textContent = 'required';
//         isValid = false;
//     }
    
//     // Validate age field
//     if (age.trim() === '') {
//         document.getElementById('ageError').textContent = 'required';
//         isValid = false;
//     }
    
//     // Validate gender field
//     if (gender.trim() === '') {
//         document.getElementById('genderError').textContent = 'required';
//         isValid = false;
//     }
    
//     // Validate nextOfKin field
//     if (nextOfKin.trim() === '') {
//         document.getElementById('nextofkinError').textContent = 'required';
//         isValid = false;
//     }
    
//     // Validate nin field
//     if (nin.trim() === '') {
//         document.getElementById('ninError').textContent = 'required';
//         isValid = false;
//     }
    
//     // Validate recommender field
//     if (recommender.trim() === '') {
//         document.getElementById('recommendersnameError').textContent = 'required';
//         isValid = false;
//     }
    
//     // Validate education field
//     if (education.trim() === '') {
//         document.getElementById('eduError').textContent = 'required';
//         isValid = false;
//     }
    
//     // // Validate sitterNumber field
//     // if (sitterNumber.trim() === '') {
//     //     document.getElementById('sitterNumberError').textContent = 'required';
//     //     isValid = false;
//     // }
    
//     // Validate recommenderscontact field
//     if (recommenderscontact.trim() === '') {
//         document.getElementById('recommenderscontactError').textContent = 'required';
//         isValid = false;
//     }

//     // // Validate religion field
//     // if (religion.trim() === '') {
//     //     document.getElementById('religionError').textContent = 'required';
//     //     isValid = false;
//     // }
    
//     // Validate  field
//     if (contact.trim() === '') {
//         document.getElementById('contactError').textContent = 'required';
//         isValid = false;
//     }

//     return isValid;
// }

