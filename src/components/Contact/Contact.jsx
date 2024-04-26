import { icons } from "../../assets/icons";
import "./Contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";

const Contact = () => {
  return (
    <div className="contact_main_container">
      <div className="buttons_container">
        <CopyToClipboard
          text="francisco.brito.developer@gmail.com"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Copiar correo"
          data-tooltip-place="top"
        >
          <button className="contact_btns">{icons.email}</button>
        </CopyToClipboard>
        <a
          className="contact_btns"
          href="https://www.linkedin.com/in/francisco-javier-brito-b4657420a/"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Linkedin"
          data-tooltip-place="top"
        >
          {icons.linkedin}
        </a>
        <a
          className="contact_btns"
          href="https://twitter.com/Francis86056304"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Twitter"
          data-tooltip-place="top"
        >
          {icons.twitter}
        </a>
        <a
          className="contact_btns"
          href="https://github.com/FranciscoJBrito"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Github"
          data-tooltip-place="top"
        >
          {icons.github}
        </a>
        <Tooltip
          id="my-tooltip"
          style={{
            borderRadius: "18",
            fontFamily: "Pixel Font7",
            background: "#38BC36",
            transition: "all 0.5s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
