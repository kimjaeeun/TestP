document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(function (project) {
        const details = project.querySelector(".details");

        project.addEventListener("click", function () {
            // Toggle the visibility of project details
            details.style.display = details.style.display === "none" ? "block" : "none";
        });
    });
});
