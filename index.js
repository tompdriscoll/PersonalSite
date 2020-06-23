

window.addEventListener('DOMContentLoaded', () => {
    
    let name = document.getElementById('name')
    let x = document.getElementById('descrip-x')
    let columnHold = document.getElementById('column-hold')
    name.addEventListener('click', ()=> {
        columnHold.style.transform = 'translate3d(-50vw, 0px, 0px)'
    })
    x.addEventListener('click', ()=> {
        columnHold.style.transform = 'translate3d(0vw, 0px, 0px)'
    })
})
