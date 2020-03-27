import React from "react";
import ReactDOM from "react-dom";


import BabelLogo from '../img/babel.svg';

// import '../detalle.html';

const App = () => (
    <>
        <h1>At long </h1>

        <img src={BabelLogo}/>
    </>
)

ReactDOM.render(<App/>, document.getElementById("root"));

