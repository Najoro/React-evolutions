import React from "react";
import { useEffect } from "react";
import { useState } from "react";
//---------------------------------------------------------------------------------------------
function useFetch(url, search) {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });
  useEffect(function () {
    (async function () {
      const response = await fetch(url+search);
      const responseData = await response.json();
      if (response) {
        setState({
          items: responseData,
          loading: false,
        });
      }
    })();
  }, []);
  return [state.items, state.loading];
}
//---------------------------------------------------------------------------------------------
const CardCocktail = function ({search}) {
  let url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const [Cocktail, loading] = useFetch(url,search);
  const { drinks } = Cocktail;
  if (loading) {
    return <div>loading...</div>;
  }
  if(drinks){
    return (
        <ul className="cocktail-contenaire">
          {drinks.map((drink) => (
            <li key={drink.idDrink} className = "cocktail-eacth">
              <div className="name-contenaire">
                <img src ={drink.strDrinkThumb} alt={drink.idDrink} />
                <p className="name"> {drink.strDrink}</p>
              </div>
              <span>
                <p className="date"><strong>Modif</strong>: {drink.dateModified}</p>
                <p> <strong>Cathegorie</strong>: {drink.strCategory}</p>
                <p> <strong>type</strong>: {drink.strAlcoholic}</p>
                <p> <strong>Glass</strong>: {drink.strGlass}</p>
              </span>
            </li>
          ))}
        </ul>
      );
  }
};
//---------------------------------------------------------------------------------------------
const Main = () => {
  return (
    <div id="Main">
        <div className="search">
            <span>
                <input type="text" placeholder="cocktail Name" />
                <input type="button" value="Recherche" />
            </span>
        </div>
        <CardCocktail search=""/>
    </div>
  );
};

export default Main;
