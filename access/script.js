var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();
console.log("date", n, time);
// set the innerHTML of that element to the date a space the time
document.getElementById('time').innerHTML = n + ' ' + time;


function validate() {
    var count = 0;
    var flag = 0,
        flag1 = 0;
    var username = document.getElementById("name").value;
    var err1 = document.getElementById("err1");
    var err2 = document.getElementById("err2");
    let result = /^[a-zA-Z ]+$/.test(username);
    if (username == "" || !result) { err1.style.display = "block"; } else {
        err1.style.display = "none";
        count = 1
    }
    var email = document.getElementById("email").value;
    var c = validateEmail(email)
    if (!c) {
        err2.style.display = "block";
    } else {
        err2.style.display = "none";
        flag = 1
    }

    if (count == 1 && flag == 1) {
        redirect();
    }



}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function redirect() {
    window.location.href = "../registration.html";
}