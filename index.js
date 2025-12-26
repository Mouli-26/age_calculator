const birthdayEl = document.getElementById("birthday");
const btnel = document.getElementById("btn");
const resultel = document.getElementById("result");

function calculateAge(evert) {
    evert.preventDefault();
    const birthdayvalue = birthdayEl.value;
    if (birthdayvalue === "") {
        alert("Please enter your birthday");

    }
    else {
        const age = getAge(birthdayvalue);
        resultel.innerText = `Your age is ${age} years`;
    }

}
function getAge(birthdayvalue) {
    const today = new Date();
    const birthDate = new Date(birthdayvalue);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
btnel.addEventListener("click", calculateAge);