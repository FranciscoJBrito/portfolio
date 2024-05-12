import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about_me_main_container">
      <div className="bento_container background_info">
        <div className="profile_description">
          <h4>Un poco sobre mí</h4>
          <p>
            Crecí en una ciudad al Norte de Argentina, llamada Salta.{" "}
            <span>Desde pequeño me interesé por la tecnología</span>,
            principalmente por desarmar cosas y entender cómo funcionan. Tuve mi
            primer experiencia con una computadora en casa de mis tíos, y{" "}
            <span>desde ese momento quedé fascinado</span>. Luego comencé a
            asistir frecuentemente a lo que en Argentina llamamos "cyber", un
            lugar en donde rentan computadoras por hora.
            <br />
            <br />A medida que fuí creciendo y aprendiendo más sobre la
            tecnología, me dí cuenta de que{" "}
            <span>quería dedicar mi vida a ella</span>. Por eso, decidí mudarme
            y estudiar Ingeniería en Computación en la Universidad Nacional de
            Córdoba, en el año 2020, sí, justo en el año de la pandemia...
            Debido a esto tuve que regresar a mi provincia natal. Dejé la
            carrera por un tiempo, pero no me rendí, seguí estudiando por mi
            cuenta, aprendiendo y también trabajando. En la actualidad luego de
            muchas idas y vueltas retomé la carrera, mientras sigo aprendiendo y
            trabajando en proyectos personales.
            <br />
            <br />
            <span>¿Por qué sigo estudiando?</span> Porque no quiero detenerme
            solo en software... el hardware también me interesa. En unos cuantos
            años planeo tener mi propia empresa tecnológica.
          </p>
        </div>
      </div>
      <div className="bento_container open_source_contributions">
        <h4>Contribuciones Open Source</h4>
        <p>
          <span>2024</span> - Contribuciones en{" "}
          <a href="https://github.com/chatwoot/chatwoot" target="black">
            Chatwoot
          </a>
          <br />
          <span>2024</span> - Contribuciones en{" "}
          <a href="https://github.com/solidusio/solidus" target="black">
            Solidus
          </a>
        </p>
      </div>
      <div className="bento_container technology_stack">
        <h4>Tecnologías</h4>
        <p>
          <span>Frontend</span> - HTML, CSS, JavaScript, React
          <br />
          <span>Backend</span> - Node.js, Express, Ruby on Rails
          <br />
          <span>Base de datos</span> - MongoDB, MySQL, PostgreSQL
        </p>
      </div>
      <div
        className="bento_container profile_image"
        style={{
          backgroundImage: `url('profile-image-two.jpeg')`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bento_container experience">
        <h4>Experiencia</h4>
        <div className="experience_history">
          <p>2021 -- 2023</p>
          <span>CTO en Trichter Consulting.</span>
        </div>
        <div className="experience_history">
          <p>2018 -- 2020</p>
          <span>Freelancer.</span>
        </div>
      </div>
      <div className="bento_container spotify ">
        <h4>Mis gustos musicales</h4>
        {/* Nirvana */}
        <iframe
          style={{ borderRadius: "12px", border: "none", margin: "5px 0px" }}
          src="https://open.spotify.com/embed/track/15VRO9CQwMpbqUYA7e6Hwg?utm_source=generator&theme=0"
          width="100%"
          height="80px"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {/* Paramore */}
        <iframe
          style={{ borderRadius: "12px", border: "none", margin: "5px 0px" }}
          src="https://open.spotify.com/embed/track/1ZLtE9tSJdaUiIJ9YoKHQe?utm_source=generator&theme=0"
          width="100%"
          height="80px"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {/* SOAD */}
        <iframe
          style={{ borderRadius: "12px", border: "none", margin: "5px 0px" }}
          src="https://open.spotify.com/embed/track/1VNWaY3uNfoeWqb5U8x2QX?utm_source=generator&theme=0"
          width="100%"
          height="80px"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {/* Basement */}
        <iframe
          style={{ borderRadius: "12px", border: "none", margin: "5px 0px" }}
          src="https://open.spotify.com/embed/track/1AMADyXgIWayh5vXLZo2qF?utm_source=generator&theme=0"
          width="100%"
          height="80px"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutMe;
