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

    // Description open & close animations

    function shiftRight(){
        details = false
        col2.style.transform = 'translate3d(0vw, 0px, 0px)'
        col3.style.transform = 'translate3d(0vw, 0px, 0px)'
        enableScroll()
    }
    let shift = '-50vw'
    
    let shiftLeft = function (){
        if (window.innerWidth < 450) shift = '-100vw'
        col2.style.transform = `translate3d(${shift}, 0px, 0px)`
        col3.style.transform = `translate3d(${shift}, 0px, 0px)`
        details = true
        disableScroll()
    }



    // Grabbing Elements for Animation
    let projects = document.getElementsByClassName('project-slide')
    let xs = document.getElementsByClassName('descrip-x')
    let col2 = document.getElementById('column2')
    let col3 = document.getElementById('column3')
    let details = false
    let skills = document.getElementById('skills-list').children


    // Adding animation to Project slides
    Array.from(projects).forEach( project => {
        project.addEventListener('click', (e)=> {
            
            let element = e.currentTarget

            let offsetTop = 0;
            while(element) {
                debugger
                 offsetTop += element.offsetTop;
                element = element.offsetParent;
            }
           

            let delay = Math.abs(offsetTop - window.scrollY) - 200
           
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
            
            if (!details){   
                setTimeout(shiftLeft, delay)
                details = true
            } 
            else {
                shiftRight()
            }
        })
    })
    Array.from(xs).forEach(x => {
        x.addEventListener('click', () => {
            shiftRight()
        })
    })

    let delay = .7
    Array.from(skills).forEach(skill => {
        skill.style.transitionDelay = `${delay}s`
        skill.style.transform = 'matrix(1,0,0,1,0,0)'
        skill.style.opacity = 1
        delay += .1
    })


})
