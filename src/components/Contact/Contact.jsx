import { icons } from "../../assets/icons";
import "./Contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.success("Email copiado al portapapeles!", {
    duration: 4000,
    style: {
      border: "1px solid #38BC36",
      padding: "16px",
      color: "#ffffff",
      background: "#202020",
    },
    iconTheme: {
      primary: "#38BC36",
      secondary: "#FFFAEE",
    },
  });
const Contact = () => {
  return (
    <div className="contact_main_container">
      <div className="buttons_container">
        <CopyToClipboard
          text="francisco.brito.developer@gmail.com"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="COPY EMAIL"
          data-tooltip-place="top"
        >
          <button className="contact_btns" onClick={notify}>
            {icons.email}
          </button>
        </CopyToClipboard>
        <a
          className="contact_btns"
          href="https://github.com/FranciscoJBrito"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Descargar CV"
          data-tooltip-place="top"
        >
          {icons.curriculum}
        </a>
        <a
          className="contact_btns"
          href="https://www.linkedin.com/in/francisco-javier-brito-b4657420a/"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="LINKEDIN"
          data-tooltip-place="top"
        >
          {icons.linkedin}
        </a>
        <a
          className="contact_btns"
          href="https://twitter.com/FranJBrito"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="TWITTER"
          data-tooltip-place="top"
        >
          {icons.twitter}
        </a>
        <a
          className="contact_btns"
          href="https://github.com/FranciscoJBrito"
          target="blank"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GITHUB"
          data-tooltip-place="top"
        >
          {icons.github}
        </a>
        <Tooltip
          id="my-tooltip"
          style={{
            borderRadius: "18",
            fontFamily: "Pixel Font7",
            color: "#ffffffde",
            background: "#202020",
            transition: "all 0.5s ease",
          }}
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
