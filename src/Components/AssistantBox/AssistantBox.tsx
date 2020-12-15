import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Collapse } from "reactstrap";
import "../../SCSS/AssistantBox.scss";

export const AssistantBox: React.FC<any> = (props:any) => {
    const msgsRef: any = useRef(null);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [arrowDirection, setArrowDirection] = useState(180);
    const [buttonRadius, setButtonRadius] = useState(15);
    const [buttonTransition, setButtonTransition] = useState(.7);
    const [messages, setMessages] = useState([<div className="botMessage" ref={msgsRef}>Do you need assistance?</div>] as any);
    const [m, setM] = useState('');

    useEffect(() => {
        msgsRef.current.scrollIntoView({behavior: "smooth"});
    })
    
    const toggle = () => {
        setIsHelpOpen(!isHelpOpen);
        changeButtonStyle();
    } 
    const changeButtonStyle = () => {
        if(isHelpOpen){
            setArrowDirection(180);
            setButtonTransition(.7);
            setButtonRadius(10);
        }
        else{
            setArrowDirection(90);
            setButtonTransition(.08);
            setButtonRadius(0);
        }
    }

    const getRandMessage = () => {
        const randMessages = [
            'No one is currently available to help you, please wait.',
            'You will have to wait, all of our associates are currently busy.',
            'No help for you!',
            'We are currently to busy to help you.',
            'Are you sure you need help?'
        ];
        let randNum = Math.floor((Math.random() * 10) + 1);
        let index = 0;
        if(randNum >= 9){
            index = 4;
        }
        else if(randNum >= 7){
            index = 3;
        }
        else if(randNum >= 5){
            index = 2;
        }
        else if(randNum >= 3){
            index = 1;
        }
        else {
            index = 0;
        }

        return <div className="botMessage" ref={msgsRef}>{randMessages[index]}</div>;
    }

    const handleSend = () => {
        if(m !== '' && m !== null){
            setMessages([
                ...messages,
                <div className="userMessage">{m}</div>,
                getRandMessage()
              ]);
        }
    }


    return(
        <div className="assistantContainer">
            <Collapse isOpen={isHelpOpen} className="assistantWrapper">
                <div className="messageContainer" id="AssistantMessageContainer">
                    {messages.map((e:any) => {return e})}
                </div>
                <Input className="assistantTextInput" name="message" type="text" onChange={(e) => setM(e.target.value)}></Input>
                <Button className="assistantSendButton" 
                    onClick={() => {
                        handleSend()
                      }}>
                    Send
                </Button>
            </Collapse>
            <Button className="assistantExpandButton" style={{ borderRadius: `${buttonRadius}px ${buttonRadius}px 0 0`, transition:`${buttonTransition}s linear` }} onClick={toggle}>
                <span className="arrow" style={{transform: `rotate(${arrowDirection}deg)`}}></span>
            </Button>
        </div>
    );
};