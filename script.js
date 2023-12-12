let seconds=0;
let minutes=0;
let hours=0;
let t;
let lapCount=1;

function add() {
    seconds++;
    if (seconds >=60){
        seconds=0;
    minutes++;
    if(minutes>=60) {
        minutes=0;
        hours++;
    }
}

 document.getElementById("display").innerHTML =
    (hours ? (hours >9 ? hours:"0"+hours) :"00")+
    ":"+
    (minutes ? (minutes >9 ? minutes:"0"+minutes) :"00")+
    ":"+
    (seconds>9?seconds:"0"+seconds);

 timer();
}
 
function timer() {
    t=setTimeout(add,1000);
}

function start() {
    timer();
}

function stop() {
    clearTimeout(t);
}

function Reset() {
    document.getElementById("display").innerHtml="00:00:00";
    seconds=0;
    minutes=0;
    hours=0;
    lapCount=1;
    clearLaps();
    clearTimeout(t);
}

function Lap() {
    const Laps=document.getElementById("Laps");
    const li=document.createElement("li");
    li.innerText= `Lap ${lapCount}:${formatTime()}`;
    Laps.appendChild(li);
    lapCount++;
}

function clearLaps() {
    const Laps=document.getElementById("laps");
    Laps.innerHtml="";
}

function formatTime() {
    return (
        (hours ? (hours >9 ? hours:"0"+hours) :"00")+
        ":"+
        (minutes ? (minutes >9 ? minutes:"0"+minutes) :"00")+
        ":"+
        (seconds>9?seconds:"0"+seconds)
    );   
}                 
