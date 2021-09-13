const skills = document.querySelector('.change-skills')
const skillsContent = document.querySelector('.skills-content')
const qualifications = document.querySelector('.change-qualifications')
const qualificationsContent = document.querySelector('.qualifications-content')

console.log(skills)
console.log(skillsContent)
console.log(qualifications)
console.log(qualificationsContent)

skills.addEventListener('click', onSkillsClickAction)
qualifications.addEventListener('click', onQualificationsClickAction)

function onSkillsClickAction() {
    if (skillsContent.style.display === 'none' && qualificationsContent.style.display != 'none') {
        showSkills()
        hideQualifications()
    }
}

function onQualificationsClickAction() {
    if (qualificationsContent.style.display === 'none' && skillsContent.style.display != 'none') {
        showQualifications()
        hideSkills()
    }
}

function showSkills() {
    skillsContent.style.display = 'grid';
    skills.classList.add('skills-is-active')
}

function hideSkills() {
    skillsContent.style.display = 'none'
    skills.classList.remove('skills-is-active')
}

function showQualifications() {
    qualificationsContent.style.display = 'flex'
    qualifications.classList.add('qualifications-is-active')
}

function hideQualifications() {
    qualificationsContent.style.display = 'none'
    qualifications.classList.remove('qualifications-is-active')

}
