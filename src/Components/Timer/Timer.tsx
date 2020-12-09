import React, { useEffect, useRef, useState } from "react";
import "../../SCSS/timer.scss";

interface IProps {
    seconds: number,
    fontSize: number,
    triggeredFunction?: Function,
}

/**
 * A component which simply displays a counter, counting down from a 
 * given seconds value.
 * 
 * @param props the seconds that the timer starts with, font size of 
 * the time text, and the function that you want to execute once the 
 * timer hits 0.
 */
export const Timer: React.FC<IProps> = (props:IProps) => {
    
    const [seconds, setSeconds] = useState(props.seconds);

    //Triggers everytime the state changes
    useEffect(() => {
        if(seconds > 0 )
        {
            setTimeout(()=>setSeconds(seconds - 1), 1000);
        }
        else
        {
            reachedCountdown();
        }
    });

    const reachedCountdown = () => {
        if(props.triggeredFunction !== undefined)
        {
            props.triggeredFunction();
        }
        else
        {
            setSeconds(props.seconds);
        }    
    }

    return(
            <p id="time" style={{fontSize: props.fontSize}} 
            key={Math.random()}>{ seconds }</p>
    ); 
}