let id = document.querySelector('.id');
let content = document.querySelector('.content');
let dice = document.querySelector('.dice');

function advice(){
    fetch('https://api.adviceslip.com/advice').then(res =>{
        return res.json();
    }).then(data =>{
        id.innerHTML = data.slip.id;
        content.innerHTML = data.slip.advice
    }).catch(error=>{
        console.log(error)
    })
}

dice.addEventListener('click' , ()=>{
    advice();
})

window.onload = ()=>{
    advice()
}