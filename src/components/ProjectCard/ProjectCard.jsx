import "./ProjectCard.css";

const ProjectCard = ({ title, stack, image }) => {
  return (
    <div className="main_container_project_card">
      <div className="project_title_container">
        <h3 className="project_title">{title}</h3>
      </div>
      <div
        className="project_stack"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="stack_names">{stack}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
