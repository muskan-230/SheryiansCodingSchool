const bulb = document.querySelector(".bulb");
const button = document.querySelector("button");

let isactive = false;
 
button.addEventListener("click",() => {
    if(!isactive){
        bulb.style.backgroundColor = "yellow";
        button.innerText  = "OFF";
        isactive = true;
    }
    else{
        bulb.style.backgroundColor = "grey";
        button.innerText  = "ON";
        isactive = false;
    }
})