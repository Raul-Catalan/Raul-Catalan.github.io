import data from "./data.json" with { type: "json" };

{/* <div id="exp_card">
  <div id="company-dates">
    <h4 id="company">Data Annotations</h4>
    <h4 id="dates">Jun. 2025 - Present</h4>
  </div>
  <div id="position-location">
    <p id="position">Data Annotator</p>
    <p id="location">Remote</p>
  </div>
  <ul id="responsibilities">
    <li>Evaluated and revised AI-generated responses to coding prompts, ensuring alignment with best practices, efficiency, and accuracy.</li>
    <li>Improve and assess AI-generated code across multiple languages and their libraries and frameworks, such as Python, Java, JavaScript, Typescript, React, and Bash.</li>
    <li>Reviewed and improved the AI-generated code across a broad range of tasks, including API development, algorithm questions, front-end implementation, and full-stack projects.</li>
    <li>Developed fine-grained evaluation criteria to model AI-generated responses, with a focus on clarity, robustness, and alignment with coding standards.</li>
  </ul>
</div> */}


function addWorkExperience(work) {
  // Experience Card
  const expCard = document.createElement("div");
  expCard.setAttribute("class", "exp-card");

  // Company and Dates
  const companyDates = document.createElement("div");
  companyDates.setAttribute("class", "company-dates");

  const company = document.createElement("h4");
  company.setAttribute("class", "company");
  company.textContent = work.company;

  const dates = document.createElement("h4");
  dates.setAttribute("class", "dates");
  dates.textContent = work.dates;

  companyDates.appendChild(company);
  companyDates.appendChild(dates);
  expCard.appendChild(companyDates);
  
  // Position and Location
  const positionLocation = document.createElement("div");
  positionLocation.setAttribute("class", "position-location");

  const position = document.createElement("p");
  position.setAttribute("class", "position");
  position.textContent = work.position;

  const location = document.createElement("p");
  location.setAttribute("class", "location");
  location.textContent = work.location;

  positionLocation.appendChild(position);
  positionLocation.appendChild(location);
  expCard.appendChild(positionLocation);

  // Highlights
  const highlights = document.createElement("ul");
  highlights.setAttribute("class", "highlights");
  work.highlights.forEach((item, index) => {
    const h = document.createElement("li");
    h.setAttribute("class", "highlight");
    h.textContent = item;
    highlights.appendChild(h);
  });
  expCard.appendChild(highlights);
  
  const experience = document.getElementById("experiences")
  experience.appendChild(expCard);
}

{/* <div id="project-card">
  <div id="name-github">
    <h4 id="name">Deep Work - </h4>
    <a id="github">github.com/Raul-Catalan/dw-cli</a>
  </div>
  <div id="technologies">
    <h4 id ="tech-header">Technologies</h4>
    <p id="tech">Python, React</p>
  </div>
  <ul id="highlights">
    <li>Evaluated and revised AI-generated responses to coding prompts, ensuring alignment with best practices, efficiency, and accuracy.</li>
    <li>Developed fine-grained evaluation criteria to model AI-generated responses, with a focus on clarity, robustness, and alignment with coding standards.</li>
  </ul>
</div> */}
function addProject(project){
  // Project Card
  const projectCard = document.createElement("div");
  projectCard.setAttribute("class", "project-card");
  
  // Project Name and Github Link
  const projectNameGithub = document.createElement("div");
  projectNameGithub.setAttribute("class", "projectName-github");
  
  const projectName = document.createElement("h4");
  projectName.setAttribute("class", "projectName");
  projectName.textContent = project.name + " - ";
  
  const github = document.createElement("a");
  github.setAttribute("class", "github");
  github.setAttribute("href", project.github);
  github.textContent = "Github Link";

  projectNameGithub.appendChild(projectName);
  projectNameGithub.appendChild(github);
  projectCard.appendChild(projectNameGithub);
  
  // Technologies
  const technologies = document.createElement("div");
  technologies.setAttribute("class", "technologies");
  
  const techHeader = document.createElement("div");
  techHeader.setAttribute("class", "tech-header");
  techHeader.textContent = "Technologies: ";
  
  const tech = document.createElement("div");
  tech.setAttribute("class", "tech");
  
  project.technologies.forEach( (item, index) => {
    const t = document.createElement("span");
    t.textContent = item

    if (index < project.technologies.length - 1) {
      t.textContent += ", ";
    }
    tech.appendChild(t);
  });

  technologies.appendChild(techHeader);
  technologies.appendChild(tech);
  projectCard.appendChild(technologies);
  
  // Highlights
  const highlights = document.createElement("ul");
  highlights.setAttribute("class", "highlights")
  project.highlights.forEach((item, index) => {
    const h = document.createElement("li");
    h.setAttribute("class", "highlight");
    h.textContent = item;
    highlights.appendChild(h);
  });
  projectCard.appendChild(highlights);

  const projects = document.getElementById("projects");
  projects.appendChild(projectCard);
}

document.addEventListener("DOMContentLoaded", () => {
  // Work Experience
  data.work.forEach( (item, index) => {
    addWorkExperience(item)
    console.log(item);
  });
  
  // Projects
  data.projects.forEach( (item, index) => {
    addProject(item);
    console.log(item);
  });
});