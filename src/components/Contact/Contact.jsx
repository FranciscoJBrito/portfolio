import { icons } from "../../assets/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_main_container">
      <div className="buttons_container">
        <button>{icons.email}</button>
        <a href="">{icons.linkedin}</a>
        <a href="">{icons.twitter}</a>
        <a href="">{icons.github}</a>
      </div>
    </div>
  );
};

export default Contact;
