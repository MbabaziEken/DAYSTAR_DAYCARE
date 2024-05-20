const form = document.getElementById('signup');
// console.log(form);
const fields = form.querySelectorAll('.form-control');
fields.forEach((field) => {
  field.addEventListener('blur', (e) => {
    console.log(field.ClassList);
    if (!field.value) {
      field.setAttribute('class', 'form-control is-invalid');
      field.parentNode.lastChild.innerHTML = 'This field is required';
    } else {
      field.setAttribute('class', 'form-control is-valid');
      field.parentNode.lastChild.innerHTML = '';
    }
  });
});