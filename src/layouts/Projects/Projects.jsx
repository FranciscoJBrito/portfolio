import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="main_project_layout">
      <ProjectCard
        title="Airbnb Clone"
        stack={["tailwind", "postgresql", "docker", "ruby", "javascript", "rails"]}
        image={"/airbnb-logo.png"}
      />
      <ProjectCard
        title="Project 2"
        stack={["css", "html", "react"]}
        image={"/mockup-airbnb.png"}
      />
      <ProjectCard
        title="Project 3"
        stack={["css", "postgresql", "rails"]}
        image={"/mockup-airbnb.png"}
      />
    </div>
  );
};

export default Projects;
