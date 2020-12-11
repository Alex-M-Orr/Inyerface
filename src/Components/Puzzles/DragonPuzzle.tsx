import React, { useState } from "react";
import "../../SCSS/dragon-puz.scss";
import dragonImg from "../../Assets/images/dragonain.gif";

interface IProps {
    triggeredFunction: Function,
}

export const DragonPuzzle: React.FC<IProps> = (props:IProps) => {
    
    let XPos = Math.random()*250;
    let YPos = Math.random()*250;

    const hurtDragon = () => {
        props.triggeredFunction();
    }

    return(
        <div style={{height: 300}}>
            <h3 className="header-text">Slay the dragon to see your profile info:</h3>
            <button onClick={hurtDragon} style={{
                transform: `translate(${XPos}px,${YPos}px)`,
            }} className="inv-btn"><img className="drag-img" src={dragonImg} alt="click to slay dragon" /></button>
        </div>
    )
}