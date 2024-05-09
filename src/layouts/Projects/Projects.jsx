import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import data from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="main_project_layout">
      <div className="projects_container">
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            id={index}
            title={project.title}
            stack={project.stack}
            image={project.image}
            mockup={project.mockup}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
      <div className="more_projects_btn">
        <a
          href="https://github.com/FranciscoJBrito?tab=repositories"
          target="blank"
        >
          Ver Mas proyectos
        </a>
      </div>
    </div>
  );
};

export default Projects;
