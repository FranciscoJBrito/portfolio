import { technologiesIcons } from "../../assets/technologies_icons";
import "./ProjectCard.css";

const ProjectCard = ({ title, stack, image, handle }) => {
  return (
    <div className="main_container_project_card" onClick={handle}>
      <div className="project_title_container">
        <h3 className="project_title">{title}</h3>
      </div>
      <div
        className="project_stack"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <span className="stack_names">
          {stack.map((icon, index) => (
            <div key={index} className="stack_icon">
              {technologiesIcons[icon]}
            </div>
          ))}
        </span> */}
      </div>
    </div>
  );
};

export default ProjectCard;
