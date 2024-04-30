// form
const form = documentget.
ElementById("myform");

// Input Fields
const fullName = documentget.ElementById("fullName");
const EBG = documentget.ElementById("EBG");
const WE = documentget.ElementById("WE");
const Gender = documentget.ElementById("Gender");
const Email = documentget.ElementById("Email");
const Password = documentget.ElementById("Password");
const comfirmPassword = documentget.ElementById("comfirmPassword");

// validation
function validatefullName(){
   // check if empty
   if(checkifempty(fullName)) return;
// it has only letters
   if(!checkIfOnlyLetters(field)) return;
   return true;
}

function checkIfempty(field){
    if(isEmpty(field.value.trim())){
    // set field invalid
setinvalid(field, `${field.name} must not be empty`);
    return true;
    } else {
        // set field valid
        setValid(field);
        return false;
    }
}
function isEmpty(value){
    if(value === '') return true;
    return false;
}

function setInvalid(field,message){
    field.className = `Invalid`
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field,message){
    field.className = `Valid`
    field.nextElementSibling.innerHTML = '';
    field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field)
        return true;
    } else{
        setInvalid(field, `$ must contain only letters`)
        return false;
    }
}
