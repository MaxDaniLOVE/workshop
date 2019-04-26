const circle = document.querySelector('.languages__circle'),
    radius = circle.r.baseVal.value,
    circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent){
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}   

setProgress(80);
console.log(circumference);
