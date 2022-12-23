import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Tirage_hazard = () => {
    const [hasards, setHasard] = useState([]);
    const [loading , setloading] = useState(true)
    const [ingredients , setIngredient] = useState({});

    useEffect(function(){
        (async function(){
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const responseData = await response.json();

            if(response.ok){
                setHasard(responseData.drinks[0]);
                setloading(false)
            }else{
                alert("erreur en au hasard");
            }
        })();
    },[])

    // id , name , img , date , categorie , type
    const {strDrink,strDrinkThumb,dateModified, strCategory,strAlcoholic} = hasards;
    const {strIngredient1 , strIngredient2,strIngredient3 ,strIngredient4,strIngredient5} =hasards;
    const {strMeasure1 , strMeasure2,strMeasure3 ,strMeasure4,strMeasure5} =hasards;
    if(loading){
        return (
            <>
                <h1>WAIT PLEASE</h1>
                <h1 className='custom-loader'></h1>
            </>
        )
    }else{
        return (
            <div className='tirage hasard'>
                <div className="basic">
                    <h1>{strDrink}</h1>
                    <img src={strDrinkThumb} alt="image" />
                    <h3><strong>type</strong> : {strCategory}</h3>
                    <h3> <strong>categorie:</strong> {strAlcoholic}</h3>
                    <h3><strong>date :</strong> {dateModified}</h3>
                </div>
                <div className="ingredient">
                    <h1>Igredients</h1>
                    <h5>{strIngredient1} : {strMeasure1}</h5>
                    <h5>{strIngredient2} : {strMeasure2}</h5>
                    <h5>{strIngredient3} : {strMeasure3}</h5>
                    <h5>{strIngredient4} : {strMeasure4}</h5>
                    <h5>{strIngredient5} : {strMeasure5}</h5>
                </div>
            </div>
        );
    }
};

export default Tirage_hazard;