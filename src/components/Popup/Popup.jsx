import "./Popup.css";

const Popup = ({ children, id, projectState }) => {
  return (
    <div
      className="main_popup_container"
      style={
        projectState.isOpen && projectState.id == id
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <div className="popup_overlay" />
      {children}
    </div>
  );
};

export default Popup;
