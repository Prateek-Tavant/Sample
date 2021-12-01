var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("username").value = time;

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

    var num = document.getElementById("email").value;
    if (num < 1111111111 || num > 9999999999) {
        err2.style.display = "block";
    } else {
        err2.style.display = "none";
        flag = 1
    }
}