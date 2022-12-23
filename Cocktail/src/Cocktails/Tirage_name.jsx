import React from 'react';
import Fetch from '../components/Fetch';
import { useRef } from 'react';
import { useState } from 'react';


const NameTirage = ({search}) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const cocktail = Fetch(search,url);
  const {items , loading} = cocktail;
  const {drinks} = items;

  if(loading){
    return (
      <>
          <h1>WAIT PLEASE</h1>
          <h1 className='custom-loader'></h1>
      </>
      )
  }
  if(drinks){
    return(
      <ul className="cocktail-contenaire">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className = "cocktail-eacth">
          <div className="name-contenaire">
            <h1> {drink.strDrink}</h1>
            <img src ={drink.strDrinkThumb} alt={drink.idDrink} />
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
    )
  }

  if(drinks == undefined){
    return(
         <h1 className='resultError'>NO RESULT <span>Try again</span></h1>
    )
  }
}

const Tirage_name = () => {
  const [searching , setSearching] = useState('');
  const input = useRef("");

  function handelClick(){
   setSearching(input.current.value)
  }
  return (
      <div className='tirage'>
        <div className="search">
            <span>
              <input type="text" placeholder="cocktail Name" ref = {input} />
              <input type="button" value="Recherche" onClick={handelClick}/>
            </span>
        </div>
        <NameTirage search= {searching}/>
      </div>
  );
};

export default Tirage_name;

