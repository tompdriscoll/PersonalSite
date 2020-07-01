

window.addEventListener('DOMContentLoaded', () => {
    
    let name = document.getElementById('name')
    let x = document.getElementById('descrip-x')
    let columnHold = document.getElementById('column-hold')
    let col2 = document.getElementById('column2')
    let col3 = document.getElementById('column3')
    name.addEventListener('click', ()=> {
        col2.style.transform = 'translate3d(-50vw, 0px, 0px)'
        col3.style.transform = 'translate3d(-50vw, 0px, 0px)'
    })
    x.addEventListener('click', ()=> {
        col2.style.transform = 'translate3d(0vw, 0px, 0px)'
        col3.style.transform = 'translate3d(0vw, 0px, 0px)'
    })
})
