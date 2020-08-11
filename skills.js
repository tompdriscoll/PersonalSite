let skills = document.getElementById('skills-list').children

let delay = .7
Array.from(skills).forEach(skill => {

skill.style.transitionDelay = `${delay}s`
skill.style.transform = 'matrix(1,0,0,1,0,0)'
skill.style.opacity = 1
delay += .1
})