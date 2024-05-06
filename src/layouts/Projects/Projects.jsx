import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import data from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="main_project_layout">
      {
        data.map((project, index) => (
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
        ))
      }
    </div>
  );
};

export default Projects;
