/* eslint-disable no-restricted-syntax */
// * Using bootstrap 5 form validaion in conjuction with javascript form
 //* manipulation to prevent pushing of invalid or null data to the back-end.
 
// Create an array with all the HTML form in the document
const forms = Array.from(document.getElementsByTagName('form'));

// Iterate through each form in the document
forms.forEach((form) => {
  // Create an Array of all form input fields
  const fields = form.querySelectorAll('.form-control');

  // Add bootstrap form validation styling on each field once the user interacts with it
  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      console.log(field.classList);
      if (!field.value) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        field.parentNode.lastChild.innerHTML = 'This field is required';
      } else {
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
        field.parentNode.lastChild.innerHTML = '';
      }
    });
  });

  // Prevent a form with empty fields from being submited
  form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    for (const [key, value] of formData) {
      if (value.trim() === '') {
        e.preventDefault();

        // Focus on the first invalid field
        document.querySelector(`[name="${key}"]`).focus();
        break;
      }
    }
  });
});