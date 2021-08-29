document.querySelector("body").addEventListener("mousemove",my_mousemove);
function my_mousemove() {
    var eye = document.querySelectorAll(".eye-1");
    eye.forEach(function(eye)
    {
    var x = eye.getBoundingClientRect().left+eye.clientWidth/2;
    var y = eye.getBoundingClientRect().top+eye.clientWidth/2;

    var radian = Math.atan2(event.pageX -x, event.pageY -y);

    var rot= radian*(180/Math.PI)* -1-270;
    eye.style.transform="rotate("+rot+"deg)";

});
}
document.querySelector("body").addEventListener("mousemove",my_mouse);
function my_mouse() {
    var eye = document.querySelectorAll(".eye-2");
    eye.forEach(function(eye)
    {
    var x = eye.getBoundingClientRect().left+eye.clientWidth/2;
    var y = eye.getBoundingClientRect().top+eye.clientWidth/2;

    var radian = Math.atan2(event.pageX -x, event.pageY -y);

    var rot= radian*(180/Math.PI)* -1-270;
    eye.style.transform="rotate("+rot+"deg)";

});
}