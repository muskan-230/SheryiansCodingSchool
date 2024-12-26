
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

const button = document.querySelector("button");

let isactive = false;
 
button.addEventListener("click",() => {
    
        if(!isactive){
            img1.src = 'https://images.unsplash.com/photo-1734088900065-4e0570acdd7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            
            img2.src = "https://images.unsplash.com/photo-1723926991442-80310b191af8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            isactive = true;
            
        }
        
        else{
            img2.src = 'https://images.unsplash.com/photo-1734088900065-4e0570acdd7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            
            img1.src = "https://images.unsplash.com/photo-1723926991442-80310b191af8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

            isactive = false;
        }

})