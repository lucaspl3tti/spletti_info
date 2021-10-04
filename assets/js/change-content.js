const skillsLink = document.querySelector(".change-skills");
const skillsContent = document.querySelector(".skills-content");
const qualificationsLink = document.querySelector(".change-qualifications");
const qualificationsContent = document.querySelector(".qualifications-content");

skillsLink.addEventListener("click", onSkillsClickAction);
qualificationsLink.addEventListener("click", onQualificationsClickAction);

function onSkillsClickAction() {
    if (
        skillsContent.style.display === "none" &&
        qualificationsContent.style.display != "none"
    ) {
        showSkills();
        hideQualifications();
    }
}

function onQualificationsClickAction() {
    if (
        qualificationsContent.style.display === "none" &&
        skillsContent.style.display != "none"
    ) {
        showQualifications();
        hideSkills();
    }
}

function showSkills() {
    skillsContent.style.display = "flex";
    skillsLink.classList.add("skills-is-active");
}

function hideSkills() {
    skillsContent.style.display = "none";
    skillsLink.classList.remove("skills-is-active");
}

function showQualifications() {
    qualificationsContent.style.display = "flex";
    qualificationsLink.classList.add("qualifications-is-active");
}

function hideQualifications() {
    qualificationsContent.style.display = "none";
    qualificationsLink.classList.remove("qualifications-is-active");
}
