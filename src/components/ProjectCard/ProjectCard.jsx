import Popup from "../Popup/Popup";
import "../Popup/Popup.css";
import { technologiesIcons } from "../../assets/technologies_icons";
import "./ProjectCard.css";
import { usePopupManager } from "../../hooks/usePopupManager";
import { icons } from "../../assets/icons";

const ProjectCard = (props) => {
  const { projectState, dispatch } = usePopupManager();

  return (
    <>
      <div className="main_container_project_card" onClick={() => dispatch({type: `OPEN_PROJECT_${props.id}`})}>
        <div className="project_title_container">
          <h3 className="project_title">{props.title}</h3>
        </div>
        <div
          className="project_stack"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </div>
      <Popup id={props.id} projectState={projectState}>
        <div className="popup_content">
          <div className="popup_image">
            <img src={props.mockup} alt={props.title} />
          </div>
          <div className="popup_overview">
            <div className="popup_header">
              <h4 className="popup_title">{props.title}</h4>
              <a className="popup_repo" href={props.link} target="_blank">
                {icons.externalLink}
              </a>
              <button className="popup_close" onClick={() => dispatch({type: "CLOSE_PROJECT"})}>
                {icons.closeBtn}
              </button>
            </div>
            <div className="popup_tech">
              {props.stack.map((icon, index) => (
                <div key={index} className="stack_icon">
                  {technologiesIcons[icon]}
                </div>
              ))}
            </div>
            <div className="popup_description">
              <h4>{props.description.title}</h4>
              <p>{props.description.description}</p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ProjectCard;
