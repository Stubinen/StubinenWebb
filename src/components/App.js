import React from 'react'
import Main from './Main'
import '../styles/Standard.css';
import {changeLang} from '../services/Local';
import ReactCountryFlag from "react-country-flag";

//changeLang("en");
const divStyle = {
    top: '10px',
   right: "40px",
   position:"absolute",
   zIndex: "999",
};
const divStyle2 = {
    top: '10px',
   right: "100px",
   position:"absolute",
   zIndex: "999",
};
function handleInput(S){
    console.log(S);
    changeLang(S);
}
const App = () => (
  <div>
    <div
        onClick = {() => handleInput("sv")}
        style = { divStyle }
    >
        <ReactCountryFlag
            code="se"
            styleProps={{
                width: '40px',
                height: '40px',
            }}
            svg
        />
    </div>
    <div
        onClick = {() => handleInput("en")}
        style = { divStyle2 }
    >
        <ReactCountryFlag
            code="gb"
            styleProps={{
                width: '40px',
                height: '40px',
            }}

            svg
        />
    </div>
    <Main />
  </div>
)

export default App
