var btn = document.querySelector('button')
var istatus = document.querySelector('h5')

var img = document.querySelector('img')

let flag = 0;


btn.addEventListener('click',function(){
if(flag == 0){

    
    istatus.innerHTML = 'Friends'
    istatus.style.color = 'green'
    
    btn.innerHTML = "Remove Friend"
    btn.style.backgroundColor = 'red'

    img.style.border = "3px solid green"
    flag = 1;
}



else {
    istatus.innerHTML = 'Stranger'
    istatus.style.color = 'red'
    
    btn.innerHTML = "Add Friend"
    btn.style.backgroundColor = 'green'
    
    img.style.border = "3px solid red"
    flag = 0;
    
}

})
