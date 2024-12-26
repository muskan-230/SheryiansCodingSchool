var btn = document.querySelector('button');
var h5 = document.querySelector('h5');

btn.addEventListener('click', function() {
    
    var growInterval = setInterval(function() {
        btn.innerHTML = 'adding...'; 
        h5.innerHTML = '....'
        
    }, 30); 

    setTimeout(function() {
        clearInterval(growInterval);

        btn.innerHTML = 'Following';
        h5.innerHTML = 'Friends' 
        
        h5.style.color = '#809c13'
        btn.style.pointerEvents = 'none'; 
    }, 3000); 
});
