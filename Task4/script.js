var h1= document.querySelector("h1");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

var stops;
var count=0;
start.addEventListener("click", function(){
    stops=setInterval(function(){
        h1.textContent=count;
        count++;

    },100)
})

stop.addEventListener("click",function(){
    clearInterval(stops)
})