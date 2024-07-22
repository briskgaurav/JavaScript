var form = document.querySelector("form");
var inps =document.querySelectorAll("input");
var h3 = document.querySelector("h3");

form.addEventListener("submit" , function (event){
    event.preventDefault();
    for(var i=0; i<=inps.length; i++){
        if(inps[i].value.trim()===''){
            h3.style.color="red";
            h3.textContent="blank Error";
            break;
        }
        else{
            h3.textContent= "Success";
            h3.style.color="green";
        }
    }
})