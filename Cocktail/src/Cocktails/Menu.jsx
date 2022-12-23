import React, { Component } from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BsGlobe} from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = () => {  
  return (
    <div id="menu">
      <div className="title">
        <h1>The<span>Cocktail</span>DB</h1>
        <article>For All</article>
      </div>
      <div className='menu'>
          <Link to = "/">Tirage par nom</Link>
          <Link to = "/Tirage_alphabet">Tirage par alphabet</Link>
          <Link to = "/Tirage_ingredient">Tirage par ingredient</Link>
          <Link to = "/Tirage_hazard">Tirage aux Hasard</Link>
      </div>
      <div className="footer">
          <p>code Source:<a href="https://github.com/Najoro/React-evolutions/tree/main/Cocktail">guithub/cocktail</a></p>
          <p>api :<a href="https://www.thecocktaildb.com/">TheCocktailDB.com (api)</a></p>
          <span>
              <div className="signature">--Najoro_2022--</div>
              <div className="resaux-sociaux">
                  <a href="#"><BsFacebook /></a>
                  <a href="https://github.com/Najoro"><BsGithub /></a>
                  <a href="https://najoro.github.io/"><BsGlobe /></a>
              </div>
          </span>
      </div>
  </div>
  );
};

export default Menu;