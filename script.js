function getAkanName(){
    var yearOfBirth=document.getElementById("year-input").value;
    var monthOfBirth=number.getElementById("month-input").value;
    var dayOfBirth=number.getElementById("day-input").value;
    var gender=document.getElementsByName("gender");
}
function getGender(){
    for(let gender of genders){
        if(gender.checked){
            return gender.value;
        }
    }
}
var myGenderValue= getGender();
function monthValidator(){
    if(monthOfBirth < 1 || monthOfBirth > 12){
        return false;
    }
    else{
        return true;
    }
}
function dayValidator(){
    if(monthOfBirth === 2 && Number(yearOfBirth)%4===0){
        if(dayOfBirth > 28 || dayOfBirth < 1){
            return false;
        }
        else if (monthOfBirth === 2 && dayOfBirth > 29){
            return false;
        }
        else if (monthOfBirth === 2 && dayOfBirth < 1){
            return false;
        }
        else{
            return true;
        }
    }
    else if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
    }
    else{
        return true;
    }

}
var monthValid=monthValidator();
var dayValid=dayValidator();

var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

var daysOfWeek = [
    "Sunday","Monday","Wednesday","Thursday","Friday","Saturday"
];

var maleAkanNames = [
    "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
];

var femaleAkanNames = [
    "Akosua","Adowa","Abenaa","Akua","Yaa","Afua","Ama"
];

