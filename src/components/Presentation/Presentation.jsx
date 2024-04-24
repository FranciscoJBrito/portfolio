import "./Presentation.css";

const Presentation = () => {
  return (
    <div className="main_presentation_container">
      <div className="text_presentation_container">
            <p><b>Desarrollador de software</b> argentino, apasionado por la tecnología, <b>motivado por ayudar</b> y crecer profesionalmente.</p>
      </div>
      <picture>
        <img src="/profile-image-two.jpeg" alt="profile image" />
      </picture>
    </div>
  );
};

export default Presentation;
