var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");
var btn=document.querySelector("button");
btn.style.fontSize="5vw";

btn.addEventListener("click",function(){
   var a = img1.src;
   var b = img2.src;
    
  img1.src=b;
  img2.src=a;
});


