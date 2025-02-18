import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  function hamburgerMenu() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

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
            <NavLink to="./portfolio">portfolio </NavLink>
          </li>
          <li>
            <NavLink to="./skills">skills </NavLink>
          </li>
          <li>
            <NavLink to="./contact">contact </NavLink>
          </li>
          <li> </li>
        </ul>
      </div>

      <div className="topnav">
        <NavLink to="/" className="active">
          <i className="fa-solid fa-house"></i>
        </NavLink>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks">
          <NavLink to="./Cv" onClick={hamburgerMenu}>
            CV
          </NavLink>
          <NavLink to="./skills" onClick={hamburgerMenu}>
            skills
          </NavLink>
          <NavLink to="./portfolio" onClick={hamburgerMenu}>
            portfolio
          </NavLink>
          <NavLink to="./contact" onClick={hamburgerMenu}>
            Kontakt
          </NavLink>
        </div>
        {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
        <NavLink to="" className="icon" onClick={hamburgerMenu}>
          <i className="fa fa-bars"></i>{" "}
        </NavLink>
      </div>
    </>
  );
}
