// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht!');
    // Hier kannst du den Code hinzufügen, um die Formulardaten zu verarbeiten
});

const projects = {
    aws: [
        { name: 'Projektname AWS 1', description: 'Kurzbeschreibung des Projekts.' },
        { name: 'Projektname AWS 2', description: 'Kurzbeschreibung des Projekts.' }
    ],
    security: [
        { name: 'Projektname Security 1', description: 'Kurzbeschreibung des Projekts.' },
        { name: 'Projektname Security 2', description: 'Kurzbeschreibung des Projekts.' }
    ]
};

function loadProjects() {
    for (let category in projects) {
        let projectList = document.querySelector(`.${category}-projects .project-list`);
        projects[category].forEach(project => {
            let projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
            projectList.appendChild(projectDiv);
        });
    }
}
<script>
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#opener img", {
            scale: 1.5,
            scrollTrigger: {
                trigger: "#opener",
                start: "top top",
                end: "bottom top",
                scrub: true,
                onLeave: () => {
                    document.querySelector("#opener").style.display = 'none';
                    document.querySelector("#main-content").style.display = 'block';
                }
            }
        });
    });
    </script>
</body>
</html>
document.addEventListener('DOMContentLoaded', loadProjects);