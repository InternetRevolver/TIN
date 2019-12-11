const fieldPoints1 = document.getElementById('points1')
const fieldPoints2 = document.getElementById('points2')
const fieldDate= document.getElementById('date2')

const errorsPoints1= document.getElementById('errors_points1')
const errorsPoints2 = document.getElementById('errors_points2')
const errorsDate = document.getElementById('errors_date')

const errorsSummary = document.getElementById('errors_summary_match')
const errorsInfo = document.getElementById('errors_info_match')

var errorMessages = {
    points: "Wymagane jest wprowadzenie zdobytych punktow",
    pointsall: "Punkty z przedzialu: 0 - 30",
    date: "Data musi byc od 2000-01-01 roku"
}

function validateForm() {
    let messages = [];
    let valid = true;

    if(fieldPoints1.value == '') {
        messages.push(errorMessages['points']);
        errorsPoints1.innerHTML = errorMessages['points'];
        fieldPoints1.className = "errors-input"
    } else if (((fieldPoints1.value < 0) || (fieldPoints1.value > 30))) {
        messages.push(errorMessages['pointsall']);
        errorsPoints1.innerHTML = errorMessages['pointsall'];
        fieldPoints1.className = "errors-input"
    }
    else {
        errorsPoints1.innerHTML = ""
        fieldPoints1.className = ""
    }

    if(fieldPoints2.value == '') {
        messages.push(errorMessages['points']);
        errorsPoints2.innerHTML = errorMessages['points'];
        fieldPoints2.className = "errors-input"
    } else if (((fieldPoints2.value < 0) || (fieldPoints2.value > 30))) {
        messages.push(errorMessages['pointsall']);
        errorsPoints2.innerHTML = errorMessages['pointsall'];
        fieldPoints2.className = "errors-input"
    }
    else {
        errorsPoints2.innerHTML = ""
        fieldPoints2.className = ""
    }

    var bits = fieldDate.value.split("-");
    if(bits[0] < 2000) {
        messages.push(errorMessages['date']);
        errorsDate.innerHTML = errorMessages['date'];
        fieldDate.className = "errors-input"
    }
    else {
        errorsDate.innerHTML = ""
        fieldDate.className = ""
    }


    if (messages.length > 0) {
        valid = false;
        errorsInfo.innerHTML = "Formularz zawiera błędy"
        errorsSummary.innerHTML = messages.join("/---/");

    } else {
        errorsSummary.innerHTML = ""
        errorsInfo.innerHTML = ""
    }
    return valid
}