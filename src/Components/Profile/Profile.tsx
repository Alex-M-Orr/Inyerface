import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../SCSS/profile.scss";
import { DragonPuzzle } from "../Puzzles/DragonPuzzle";
import { EditButton } from "./EditButton";

interface IProps {

}

/**
 * Displays persons profile information
 * 
 * @param props N/A
 */
export const ProfileComp: React.FC<IProps> = (props:IProps) => {

    const [ maxImgWidth, setMaxImgWidth ] = useState(60);
    const [ isPuzzleSolved, setIsPuzzleSolved ] = useState(false);
    const [ toggleName, setNameToggle ] = useState(false);
    const [ toggleRotate, setPanelRotate ] = useState("rotate(90deg)");
    const [ showInfo, setShowInfo ] = useState(false);

    const tempName = "Dilly Gobbington";
    const tempBio = "I\'m a pretty cool guy to be frank. I don\'t like to gloat "+
    "normally, but honestly what choice do I have here? I\'m tangibly, diagnosably " +
    "perfect in every concievable way. I definitely undersold myself with my first " +
    "sentence. Not that I\'m capable of making mistakes of course. I\'m so " +
    "fucking cool that one time, my dad walked out of the ... Actually, I\'m too " +
    "cool to finish that story. I know you\'ll all agree if and when you are graced " +
    "with my presence.";

    let puzzleToSolve:any;

    useEffect(()=>{
        if(maxImgWidth < 10)
        {
            setMaxImgWidth(60);
        }
    });

    const randomPuzzle = () => {
        const randNum = Math.round(Math.random()*2);
            if( randNum == 0 )
            {
                return(  <DragonPuzzle triggeredFunction={()=>setIsPuzzleSolved(true)} /> );
            }
            else if( randNum == 1 )
            {
                return (<p>another puzzle will go here</p>);
            }
            else if( randNum == 2 )
            {
                return (<p>yet another puzzle will go here</p>);
            }
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
                            {tempName}</p> 
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
                            
                                //if it has been solved, then show the user's information
                                <>
                                    <h3 className="prof-text-header">Name:</h3>
                                    <hr className="prof-hr"/>
                                    <EditButton buttonName="Name" text={tempName}/>
                                    <br/>
                            
                                    <h3 className="prof-text-header">Bio:</h3>
                                    <hr className="prof-hr"/>
                                    <EditButton buttonName="Bio" text={tempBio}/>
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