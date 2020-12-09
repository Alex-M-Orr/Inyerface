import React, { useState } from "react";
import {
  Form,
  Input,
  Collapse,
  Button,
  Label,
  InputGroup,
  Card,
} from "reactstrap"; 
import "../../SCSS/register.scss";
import { Timer } from "../Timer/Timer";

export const Register: React.FC<any> = (props: any) => {
  const [formOpen, setFormOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState(45);
  const [subPos,setSubPos] = useState(0);

  const toggleForm = () => {
    setFormOpen(!formOpen);
    changeArrowDirection();
  }
  const changeArrowDirection = () => {
    if(formOpen){
      setArrowDirection(45);
    }
    else{
      setArrowDirection(225);
    }    
  }
  const moveSubmit = () => {
    console.log("on mouse enter")
    switch (subPos) {
      case 0:
        setSubPos(-200);
        break;
      case -200:
        setSubPos(200);
        break;
      case 200:
        setSubPos(-200);
        break;
    }
  }
  
  function shuffle(array:any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  let mappedNums:any = [];
  const phoneNumberOption= (() => {
    let nums = [0,1,2,3,4,5,6,7,8,9];
    
    for(let i = 0; i<10;i++){
      nums = shuffle(nums);
      mappedNums.push(<select name={`digit${i}`}>{nums.map((n) => <option value={n} >{n}</option>)}</select>);
    }
  })();  
  

  return (
    <div>
      <Collapse isOpen={formOpen} className="registerWrapper">
        <Form>
          <Label>Enter your email:</Label>
          <br/>
          <InputGroup>
          <Input name="emailKey" value="Email" style={{ width: "30%" }}>Email</Input>
          <select name="atSymbol"> 
            <option selected disabled hidden>Select the @ symbol</option>
            <option value="WRONG">!@</option>
            <option value="WRONG">.@</option>
            <option value="WRONG">@?</option>
            <option value="@"> @</option>
            <option value="WRONG">@`</option>
          </select>
          <Input name="emailAddress" value="Website.com" style={{ width: "30%"}}>website</Input>
          </InputGroup>
          <br/>
          <Label name="password" value="password">Password:</Label>
          <br/>
          <Input name="password"></Input>
          <br/>
          <Label>Enter first and last name:</Label>
          <InputGroup>
            <Input name="firstName" type="text" value="First Name"></Input>
            <Input name="lastName" type="text" value="Last Name"></Input>
          </InputGroup>

          <Label name="weight">Weight</Label>
          <Input name="weight"></Input>
          <Label name="phone">Phone Number</Label>
          <InputGroup id="phoneNumbers">
          { mappedNums }
          </InputGroup>
          <input type="submit" style={{transform: `translateX(${subPos}px)`}} value="Submit" id="registerSubmit" onMouseEnter={ moveSubmit }></input>
        </Form>
        <Timer seconds={Math.round(Math.random()*20)} fontSize={100} />
      </Collapse>
      <Button id="registerExpandButton" onClick={toggleForm}>
        <span className="arrow" style={{transform: `rotate(${arrowDirection}deg)`}}></span>
      </Button>
    </div>
  );
};
