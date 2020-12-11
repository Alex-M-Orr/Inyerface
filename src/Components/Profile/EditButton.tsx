import React, { SyntheticEvent, useEffect, useState } from "react";
import $ from "jquery";
import "../../SCSS/edit-btn.scss";
import { useDispatch } from "react-redux";
import { setUserStore } from "../../actions/UserAction";
import { IUserState } from "../../reducers/UserReducer";

interface IProps {
    buttonName: string,
    text: string,
}

export const EditButton: React.FC<IProps> = (props:IProps) => {

    const [showTextBox, setShowBox] = useState(false);
    const [XPos, setXPos] = useState(Math.random()*props.text.length);
    const [YPos, setYPos] = useState(Math.random()*(props.text.length/4));
    const [colors, setColors] = useState(["white", "#332e2e", "#d55e53"]);
    const dispatch = useDispatch();
    
    const editText = (event:SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newText = event.currentTarget["text"].value;

        if(props.buttonName.toLowerCase() == "name")
        {
            const user:IUserState = {
                email: "bye bye email",
                password: "bye bye password",
                name: newText,
                weight: -69,
                phone: -69
            }

            dispatch(setUserStore(user));
        }
        

        
        console.log(newText);
    }

    const toggleColors = () => {
        if(colors[0] === "white")
        {
            setColors(["#00000000", "#00000000", "#00000000"]);
        }
        else
        {
            setColors(["white", "#332e2e", "#d55e53"]);
        }
    }

    return(
        <div>
            {/* Button underneeth text */}
            <button style={{
                transform: `translate(${XPos}px,${YPos}px)`,
                color: colors[0],
                backgroundColor: colors[2],
                border: "2px solid " + colors[1],
                display: "inline",
                zIndex: 0,
            }}
            id="text-edit-btn"
            >Change {props.buttonName}</button>

            {/* Invisible button above the text (has to be rendered before form element) */}
            <button style={{
                transform: `translate(${XPos}px,${YPos}px)`,
                display: "inline",
                zIndex: 2,
            }} 
            id="inv-edit-btn"
            onClick={()=>setShowBox(!showTextBox)}
            onMouseEnter={toggleColors}
            onMouseLeave={toggleColors}>Change {props.buttonName}</button>

            {/* Either the edit text box and submit button or plain text */}
            {showTextBox ? 
            <form onSubmit={editText} id="">

                <div className="row">
                    <input type="textarea" className="text-area" name="text" 
                    size={props.text.length} placeholder={props.text}/>
                </div>
                
                <div className="row">
                    <input type="submit" className="submit-btn" 
                    value="Change the text to the new text"/>
                </div>

            </form>
            :
            <p className="text-wiggle">{props.text}</p>
            }
            
        </div>
    )
}