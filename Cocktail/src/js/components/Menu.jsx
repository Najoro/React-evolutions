import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div id='Menu'>
                <div className="title">
                    <h1>The<span>Cocktail</span>DB</h1>
                    <article>For All</article>
                </div>
               <div className='menu'>
                <a href="#">Home</a>
                <a href="#">About</a>
               </div>
            </div>
        );
    }
}

export default Menu;