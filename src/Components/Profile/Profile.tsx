import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../SCSS/profile.scss";

interface IProps {

}

/**
 * Displays persons profile information
 * 
 * @param props N/A
 */
export const ProfileComp: React.FC<IProps> = (props:IProps) => {

    const [ maxImgWidth, setMaxImgWidth ] = useState(60);
    const [ toggleName, setNameToggle ] = useState(false);
    const [ toggleRotate, setPanelRotate ] = useState("rotate(90deg)");
    const [ showInfo, setShowInfo ] = useState(false);

    const tempName = "Dilly Gobbington";
    const tempBio = "I\'m a pretty cool guy to be frank. I don\'t like to gloat "+
    "normally, but honestly what choice do I have here? I\'m tangibly, diagnosably " +
    "perfect in every concievable way. I definitely undersold myself with my first " +
    "sentence there. Not that I\'m capable of making mistakes of course. I\'m so " +
    "fucking cool that one time, my dad walked out of the ... Actually, I\'m too " +
    "cool to finish that story. I know you\'ll all agree if and when you are graced " +
    "with my presence.";

    useEffect(()=>{
        if(maxImgWidth < 10)
        {
            setMaxImgWidth(60);
        }

        if(showInfo)
        {
            
        }
    });

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
                        <img style={{maxWidth: maxImgWidth}} className="prof-img"
                        src="https://cdn.shopify.com/s/files/1/1635/2935/products/38336_large.jpg?v=1600837700" 
                        alt="I'm not sure what this is" 
                        onClick={()=>setMaxImgWidth(maxImgWidth-10)}/>
                    </div>
                </div>
                {/* Profile Info */}
                <div className="col-9">
                    <div className="prof-info-container"
                    onMouseEnter={()=>setShowInfo(true)}
                    onMouseLeave={()=>setShowInfo(false)}>
                        { showInfo ?
                            <>
                            {/* Name: <p style={{transform: letterPos}}>{tempName}</p> */}
                            <h3 className="prof-text-header">Name:</h3>
                            <hr className="prof-hr"/>
                            <p className="text-wiggle">{tempName}</p>
                            <br/>
                            {/* Bio: <p style={{transform: letterPos}}>{tempBio}</p> */}
                            <h3 className="prof-text-header">Bio:</h3>
                            <hr className="prof-hr"/>
                            <p className="text-wiggle">{tempBio}</p>
                            </>
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