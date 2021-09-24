function subirTela(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

function botaoAparece(){
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none'
    }else{
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

window.addEventListener('scroll', botaoAparece)