

window.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Enabling and Disabling
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
    e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }



    // Grabbing Elements for Animation
    let projects = document.getElementsByClassName('project-slide')
    let xs = document.getElementsByClassName('descrip-x')
    let col2 = document.getElementById('column2')
    let col3 = document.getElementById('column3')
   

    Array.from(projects).forEach( project => {
        project.addEventListener('click', (e)=> {
            let scrollY = e.currentTarget.offsetTop 
            let delay = Math.abs(scrollY - window.scrollY) - 200
    
            window.scrollTo({
                top: scrollY,
                behavior: 'smooth'
            })
            disableScroll()
            
            let shiftLeft = function (){
            col2.style.transform = 'translate3d(-50vw, 0px, 0px)'
            col3.style.transform = 'translate3d(-50vw, 0px, 0px)'
            }

            setTimeout(shiftLeft, delay)

            console.log('fishy')
        })
    })
    Array.from(xs).forEach(x => {
        x.addEventListener('click', () => {
            console.log('sup')
            enableScroll()
            col2.style.transform = 'translate3d(0vw, 0px, 0px)'
            col3.style.transform = 'translate3d(0vw, 0px, 0px)'
        })
    })
})
