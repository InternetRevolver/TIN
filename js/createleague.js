const fieldFullName = document.getElementById('full_name')
const fieldFoundationYear = document.getElementById('foundation_year')
const fieldDateStart = document.getElementById('date_start')
const fieldDateEnd = document.getElementById('date_end')

const errorsFullName= document.getElementById('errors_full_name')
const errorsFoundationYear = document.getElementById('errors_foundation_year')
const errorsDateStart  = document.getElementById('errors_date_start')
const errorsDateEnd = document.getElementById('errors_date_end')

const errorsSummary = document.getElementById('errors_summary')
const errorsInfo = document.getElementById('errors_info')

var errorMessages = {
    full_name: "Pelna nazwa ligi jest wymagana",
    foundation_year: "Zakres daty od 1800 roku",
    date_start: "Data startu ligi w tym roku jest wymagana",
    date_end: "Data konca ligi jest wczesniejsza data niz start ligi"
}

function validateForm() {
    let messages = [];
    let valid = true;

    if(fieldFullName.value == '') {
        messages.push(errorMessages['full_name']);
        errorsFullName.innerHTML = errorMessages['full_name'];
        fieldFullName.className = "errors-input"
    } else {
        errorsFullName.innerHTML = ""
        fieldFullName.className = ""
    }


    if(fieldFoundationYear.value < 1800) {
        messages.push(errorMessages['foundation_year']);
        errorsFoundationYear.innerHTML = errorMessages['foundation_year'];
        fieldFoundationYear.className = "errors-input"
    } else {
        errorsFoundationYear.innerHTML = ""
        fieldFoundationYear.className = ""
    }

    if(fieldDateStart.value == '') {
        messages.push(errorMessages['date_start']);
        errorsDateStart.innerHTML = errorMessages['date_start'];
        fieldDateStart.className = "errors-input"
    } else {
        errorsDateStart.innerHTML = ""
        fieldDateStart.className = ""
    }
    var bits = fieldDateStart.value.split("-");
    var bits2 = fieldDateEnd.value.split("-");
    if(bits2[0] < bits[0] ) {
        messages.push(errorMessages['date_end']);
        errorsDateEnd.innerHTML = errorMessages['date_end'];
        fieldDateEnd.className = "errors-input"
    } else if (bits2[1] < bits[1]){
        messages.push(errorMessages['date_end']);
        errorsDateEnd.innerHTML = errorMessages['date_end'];
        fieldDateEnd.className = "errors-input"
    } else if (bits2[2] < bits[2]){
        messages.push(errorMessages['date_end']);
        errorsDateEnd.innerHTML = errorMessages['date_end'];
        fieldDateEnd.className = "errors-input"
    }
    else {
        errorsDateEnd.innerHTML = ""
        fieldDateEnd.className = ""
    }


    if (messages.length > 0) {
        valid = false;
        errorsInfo.innerHTML = "Formularz zawiera błędy"
        errorsSummary.innerHTML = messages.join("/---/");

    } else {
        errorsFullName.innerHTML = ""
        errorsSummary.innerHTML = ""
        errorsInfo.innerHTML = ""
        fieldFullName.className = ""
    }
    return valid
}