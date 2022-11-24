import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BsGlobe} from "react-icons/bs";

function CreateurApp() {
  return (
    <span>
    <div className="signature">--Najoro_2022--</div>
      <div className="resaux-sociaux">
        <a href="#"><BsFacebook /></a>
        <a href="https://github.com/Najoro"><BsGithub /></a>
        <a href="https://najoro.github.io/"><BsGlobe /></a>
      </div>
    </span>
  );
}

const Footer = () => {
  return (
    <div id="Footer">
      <p>api :<br /><a href="https://www.thecocktaildb.com/">TheCocktailDB.com (api)</a></p>
      <CreateurApp />
      <span>
        <h5> " Thanks for Watching "</h5>
        <p>code Source:<a href="#">guithub/cocktail</a></p>
      </span>
    </div>
  );
};

export default Footer;
