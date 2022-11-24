import React, { Component } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;