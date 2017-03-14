var bodyColor = document.querySelector("body");
var timeNow = document.querySelector(".time");
var moveDiv = document.querySelector("#move");
setInterval(function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var hexColor = `#`+h+m+s
    timeNow.innerHTML = hexColor;
    bodyColor.style.backgroundColor = hexColor;
    moveDiv.style.backgroundColor = hexColor;
},1000)
function checkTime(i) {
    if (i < 10) {
        i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
