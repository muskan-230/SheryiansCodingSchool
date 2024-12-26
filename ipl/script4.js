var teams = ['CSK','MI','KKR','GT','SRH','RR','LSG','PBKS','DC','RCB']

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')



btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*teams.length)

    h1.innerHTML = teams[num];
})