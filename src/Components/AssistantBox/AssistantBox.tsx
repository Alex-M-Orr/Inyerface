import React, { useState } from "react";
import { Form, Input, Button, Collapse } from "reactstrap";
import "../../SCSS/AssistantBox.scss";

export const AssistantBox: React.FC<any> = (props:any) => {
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [arrowDirection, setArrowDirection] = useState(180);
    const [buttonRadius, setButtonRadius] = useState(15);
    const [buttonTransition, setButtonTransition] = useState(.7);
    let messages:any = [];

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        messages.push(<div className="userMessage">{event.currentTarget["message"].value}</div>);
        messages.push(<div className="botMessage">No one is currently available to help you, please wait.</div>);
    }


    return(
        <div>
            <Collapse isOpen={isHelpOpen} className="assistantWrapper">
                <span>Do you need assistance?</span>
                <div>
                    {messages}
                </div>
                <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                    <Input name="message" type='text'></Input>
                    <input type="submit" value="Send"></input>
                </Form>
            </Collapse>
            <Button className="assistantButton" style={{ borderRadius: `${buttonRadius}px ${buttonRadius}px 0 0`, transition:`${buttonTransition}s linear` }} onClick={toggle}>
                <span className="arrow" style={{transform: `rotate(${arrowDirection}deg)`}}></span>
            </Button>
        </div>
    );
};