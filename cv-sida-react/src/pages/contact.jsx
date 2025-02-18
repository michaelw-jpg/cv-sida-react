import "../styles/contact-style.css";

export default function contact() {
  return (
    <div id="main">
      <h1>Kontakta mig</h1>
      <div className="contact item">
        <h3>Michael Wortel</h3>
        <p>Telefon: 070-1234567</p>
        <p>Email:</p>
      </div>

      <div className="contact item">
        <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="" />
        <h3>Linkedin</h3>
        <a href="https://www.linkedin.com/in/michael-wortel-a12428313/">
          Besök min linkedin profil
        </a>
      </div>
      <div className="contact item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt=""
        />
        <h3>GitHub</h3>
        <a href="https://github.com/michaelw-jpg">Besök min github profil</a>
      </div>
    </div>
  );
}
