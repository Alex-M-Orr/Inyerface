import React, { useState } from "react";
import "../../SCSS/dragon-puz.scss";

interface IProps {
    triggeredFunction: Function,
}

export const DragonPuzzle: React.FC<IProps> = (props:IProps) => {
    
    let XPos = Math.random()*100;
    let YPos = Math.random()*100;

    const hurtDragon = () => {
        props.triggeredFunction();
    }

    return(
        <div style={{height: 300}}>
            <h3>Slay the dragon to see your profile info: </h3>
            <button onClick={hurtDragon} style={{
                transform: `translate(${XPos}px,${YPos}px)`,
            }} className="inv-btn"><img src="" alt="click to slay dragon" /></button>
        </div>
    )
}