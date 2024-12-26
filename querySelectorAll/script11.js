var btns = document.querySelectorAll('button')
var body = document.querySelector('body')

btns.forEach(function(btns){
     btns.addEventListener('click', function(){
        
        console.log(btns.innerHTML)
        body.style.backgroundColor = btns.innerHTML
    })
})