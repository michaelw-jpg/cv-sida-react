import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="./">Home </NavLink>
          </li>
          <li>
            <NavLink to="./Cv">CV </NavLink>
          </li>
          <li>
            <NavLink to="./portfolio">skills </NavLink>
          </li>
          <li>
            <NavLink to="./skills">portfolio </NavLink>
          </li>
          <li>
            <NavLink to="./contact">contact </NavLink>
          </li>
          <li> </li>
        </ul>
      </div>

      <div className="topnav">
        <NavLink to="index.html" className="active">
          <i className="fa-solid fa-house"></i>
        </NavLink>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks">
          <NavLink to="cvpage.html">CV</NavLink>
          <NavLink to="skills.html">Kunskaper</NavLink>
          <NavLink to="portfolio.html">portfolio</NavLink>
          <NavLink to="contact.html">Kontakt</NavLink>
        </div>
        {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
        <NavLink
          to="javascript:void(0);"
          className="icon"
          onclick="hamburgerMenu()"
        >
          <i className="fa fa-bars"></i>{" "}
        </NavLink>
      </div>
    </>
  );
}
