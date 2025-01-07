setInterval(function(){
    let ct = new Date().toLocaleTimeString()
    document.getElementsByClassName('span')[0].innerHTML=ct
},1000)



setInterval(function(){
    let ct = new Date().toLocaleDateString()
    document.getElementsByClassName('span')[1].innerHTML=ct
},1000)


