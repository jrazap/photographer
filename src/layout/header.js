import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import { Link } from "react-router-dom";
import data from "../data/layout.json";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    let menubar = $("#menu-bar");
    menubar.on("click", () => {
      $("#navbar").toggleClass("active");
      menubar.toggleClass("active");
      if (menubar.hasClass("active")) {
        menubar.text("×");
      } else {
        menubar.text("=");
      }
    });
  }, []);

  return (
    <header>
      <div className="container">
        <div className="row">
          <Link to="/" className="brand">
            {data.header.brandName}
          </Link>
          <span id="menu-bar">=</span>

          <ul id="navbar">
            {data.header.navlinks.map((link) => {
              return (
                <li className="item" key={link.id}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              );
            })}
            <li className="item">
              <a href="https://facebook.com" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
