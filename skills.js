let skills = Array.from(document.getElementById('skills-list').children)
let contact = Array.from(document.getElementById('contact-list').children)

let delay = .7
// Array.from(skills).forEach(skill => {

// skill.style.transitionDelay = `${delay}s`
// skill.style.transform = 'matrix(1,0,0,1,0,0)'
// skill.style.opacity = 1
// delay += .1
// })

for(let i=0; i<=skills.length; i++){
    
    skills[i].style.transitionDelay = `${delay}s`
    skills[i].style.transform = 'matrix(1,0,0,1,0,0)'
    skills[i].style.opacity = 1
    
    if(contact[i]){
    contact[i].style.transitionDelay = `${delay}s`
    contact[i].style.transform = 'matrix(1,0,0,1,0,0)'
    contact[i].style.opacity = 1}
    delay += .1
}