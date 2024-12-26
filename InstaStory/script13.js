var arr = [
    {
        dp:'https://images.unsplash.com/photo-1682310933990-97ec56f44ae1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://i.pinimg.com/736x/52/b9/73/52b9733a68c21844249cb392c792dd91.jpg',
        username:'Olivia'
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1703343321328-d727e75e0d20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D',
        story:'https://i.pinimg.com/736x/a0/31/8f/a0318f06aa0bbdeb661e6d41f28e4047.jpg',
        username:'Isabella',
    },
    {
        dp:'https://images.unsplash.com/photo-1732165782979-43619d170e86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D',
        story:'https://i.pinimg.com/736x/b3/63/87/b363872c5c5f0bc87cc86653f02a292a.jpg',
        username:'Alice',
    },
    {
        dp:'https://images.unsplash.com/photo-1731589815860-2a5665633d93?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D',
        story:'https://i.pinimg.com/736x/9c/e2/dd/9ce2dd9d26c1cbb6f02c79ef4b016665.jpg',
        username:'Rose',
    },
    {
        dp:'https://images.unsplash.com/photo-1731484395148-b1d7f2af7d54?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D',
        story:'https://i.pinimg.com/736x/a8/f8/b8/a8f8b88788db727ddb02733abbabd841.jpg',
        username:'Sophia',
    },
    {
        dp:'https://images.unsplash.com/photo-1675112632426-1bc0c92a712a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://i.pinimg.com/736x/a8/5a/0f/a85a0f70c1cb67c88c60ec2f5eb2c80d.jpg',
        username:'Gigi',
    },
];

var sum = ''

arr.forEach(function(elem,idx){
    sum = sum  + ` <div class="story">
                <img id = ${idx} src= "${elem.dp}" alt="">
            </div>`
})

var storiyan = document.querySelector('#storiyan')
var full = document.querySelector('#full')
var fullUser = document.querySelector('#full h2')
var growth = document.querySelector('#growth')
storiyan.innerHTML = sum

storiyan.addEventListener('click',function(dets){
        var grow = 0
        var gold = arr[dets.target.id]

       var inter = setInterval(function(){
            grow++
            
            growth.style.width = grow+'%'
        },30)

        full.style.display = 'block'
        full.style.backgroundImage = `url(${gold.story})`
        fullUser.innerHTML = gold.username

        setTimeout(function(){
            full.style.display = 'none'
            clearInterval(inter)
        },3000)


})
