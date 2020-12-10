import React from "react";
import { useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import "../../SCSS/popup.scss";

interface IPopupProps {
    buttonClick: () => void,
    isPopped: boolean
}

export const Popup: React.FC<any> = (props: any) => {

    const [popupDiplay, setPopupDisplay] = useState("block");
    

    const clicked=()=>{
        console.log("clicked");
        setPopupDisplay("none");
    }
  return (
      <div id="popupWrapper" style={{display: `${popupDiplay}`}}>
        <div id="popupWindow">
            <h1>ATTENTION!!!</h1>
          Please close out of this pop up :)
          
          <p style={{marginTop: "100px"}}>Unfortunately for you the close button is shy :(</p>
        </div>
        <button id="popupButton" style={{left: `${(Math.random()*95)}%`, top: `${(Math.random()*95)}%`}} onClick={ clicked }>X</button>
      </div>
  );
};
