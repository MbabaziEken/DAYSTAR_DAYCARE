// form
const form = documentget.
ElementById("form");

const fullName = documentget.ElementById("fullName");
const EBG = documentget.ElementById("EBG");
const WE = documentget.ElementById("WE");
const Gender = documentget.ElementById("Gender");
const Email = documentget.ElementById("Email");
const Password = documentget.ElementById("Password");

// validation
function validatefullName(){
   // check if empty
   if(checkifempty(fullName)) return;

}

function checkIfEmpty