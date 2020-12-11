import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../SCSS/profile.scss";
import { DragonPuzzle } from "../Puzzles/DragonPuzzle";
import { EditButton } from "./EditButton";

interface IProps {
    name: string,
    weight: number,
    phoneNumber: number
}

/**
 * Displays persons profile information
 * 
 * @param props these properties are tied to the user state. 
 * So essentially the props you see above contain the current
 * data within that user state. The second that the user state 
 * gets updated, these properties change to reflect that new
 * data.
 */
const ProfileComp: React.FC<IProps> = (props:IProps) => {

    const [ maxImgWidth, setMaxImgWidth ] = useState(60);
    const [ isPuzzleSolved, setIsPuzzleSolved ] = useState(false);
    const [ toggleName, setNameToggle ] = useState(false);
    const [ toggleRotate, setPanelRotate ] = useState("rotate(90deg)");
    const [ showInfo, setShowInfo ] = useState(false);

    useEffect(()=>{
        if(maxImgWidth < 10)
        {
            setMaxImgWidth(60);
        }
    });

    /** Renders a random puzzle element */
    const randomPuzzle = () => {
        const randNum = Math.round(Math.random()*2);
            if( randNum == 0 )
            {
                return(  <DragonPuzzle triggeredFunction={()=>setIsPuzzleSolved(true)} /> );
            }
            else if( randNum == 1 )
            {
                return ( <DragonPuzzle triggeredFunction={()=>setIsPuzzleSolved(true)} />);
            }
            else if( randNum == 2 )
            {
                return ( <DragonPuzzle triggeredFunction={()=>setIsPuzzleSolved(true)} />);
            }
    }

    const formattedPhoneNumber = (phoneNumber:number) => {

        let numArray = [];
        const stringNumber:string = phoneNumber.toString();

        for(let i:number = 0; i < stringNumber.length; i++)
        {
            numArray.push(stringNumber.charAt(i));
        }

        return `(${numArray[0]}${numArray[1]}${numArray[2]})-${numArray[3]}${numArray[4]}${numArray[5]}-`+
        `${numArray[6]}${numArray[7]}${numArray[8]}${numArray[9]}`;

    }

    return(
        <div className="prof-bg">
            <div className="container">
            <div className="row justify-content-center">
                {/* Profile Image */}
                <div className="col-3">
                    <div className="prof-img-container" 
                    style={{transform: toggleRotate}}
                    onMouseEnter={()=>setPanelRotate("rotate(0deg)")}
                    onMouseLeave={()=>setPanelRotate("rotate(90deg)")}>
                        { toggleName ? 
                        <p className="prof-name" onMouseLeave={()=>setNameToggle(false)}
                        style={{transform: "rotate(180deg)"}}>
                            {props.name}</p>
                        :
                        <div className="black-box"
                        onMouseEnter={()=>setNameToggle(true)} />
                        }
                        <div className="row justify-content-center">
                        <img style={{maxWidth: maxImgWidth}} className="prof-img"
                        src="https://cdn.shopify.com/s/files/1/1635/2935/products/38336_large.jpg?v=1600837700" 
                        alt="I'm not sure what this is" 
                        onClick={()=>setMaxImgWidth(maxImgWidth-10)}/>
                        </div>
                        
                    </div>
                </div>
                {/* Profile Info */}
                <div className="col-9">
                    <div className="prof-info-container"
                    onMouseEnter={()=>setShowInfo(true)}
                    onMouseLeave={()=>setShowInfo(false)}>
                        {/* if the user has moused over the profile info comp, they will
                        either see a puzzle or their user information */}
                        { showInfo ?
                            //if the info box is opened, we determine if the puzzle has been solved
                            isPuzzleSolved ? 
                            
                                //if it has been solved, then show the user's information (the order of these will become random)
                                <>
                                    <h3 className="prof-text-header">Name:</h3>
                                    <hr className="prof-hr"/>
                                    <EditButton buttonName="Name" text={props.name}/>
                                    <br/>
                            
                                    <h3 className="prof-text-header">Weight:</h3>
                                    <hr className="prof-hr"/>
                                    <EditButton buttonName="Weight" text={props.weight.toString()}/>

                                    <h3 className="prof-text-header">Phone Number:</h3>
                                    <hr className="prof-hr"/>
                                    <EditButton buttonName="Phone Number" text={formattedPhoneNumber(props.phoneNumber)}/>
                                </>
                            
                                :

                                //if not, you better be ready to solve one of the puzzles
                                randomPuzzle() //renders a random puzzle component
                            
                            :
                            <span/>
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
}

const mapStateToProps = (store:any) => {
    return {
        name: store.UserReducer.name,
        weight: store.UserReducer.weight,
        phoneNumber: store.UserReducer.phone
    }
};

export default connect<IProps>(mapStateToProps)(ProfileComp);