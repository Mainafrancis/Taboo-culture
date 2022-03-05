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
    if(monthOfBirth === 2 && Number(yearOfBirth)%4===0)
}
