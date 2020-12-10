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
import { useDispatch } from 'react-redux';
import { IUserState } from "../../reducers/UserReducer";
import { setUserStore } from "../../actions/UserAction";

let counter =0;
let mappedNums:any = [];

export const Register: React.FC<any> = (props: any) => {
  const [formOpen, setFormOpen] = useState(false);
  const [ toggleTimer, setToggleTimer ] = useState(false);
  const [arrowDirection, setArrowDirection] = useState(180);
  const [buttonRadius, setButtonRadius] = useState(15);
  const [buttonTransition, setButtonTransition] = useState(.7);
  const [subPos,setSubPos] = useState(0);
  const dispatch = useDispatch();


  const registerFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("IN REGISTERFORMSUBMIT");
    
    let email = event.currentTarget["emailKey"].value + event.currentTarget["atSymbol"].value + event.currentTarget["emailAddress"].value;
    let password = event.currentTarget["password"].value;
    let name = event.currentTarget["firstName"].value + " " + event.currentTarget["lastName"];
    let weight = event.currentTarget["weight"].value; 
    let phone = event.currentTarget["digit0"].value + event.currentTarget["digit1"].value + event.currentTarget["digit2"].value + event.currentTarget["digit3"].value +
    event.currentTarget["digit4"].value + event.currentTarget["digit5"].value + event.currentTarget["digit6"].value + event.currentTarget["digit7"].value + event.currentTarget["digit8"].value +
    event.currentTarget["digit9"].value;
  
    const user: IUserState = {
      email: email,
      password: password,
      name: name,
      weight: weight,
      phone: phone,
    }
  
    dispatch(setUserStore(user));
    console.log("PAST DISPATCH");  
  }

  const toggleForm = () => {
    setToggleTimer(!toggleTimer);
    setFormOpen(!formOpen);
    changeArrowDirection();
    changeButtonStyle();
  }
  const changeArrowDirection = () => {
    if(formOpen){
      setArrowDirection(180);
    }
    else{
      setArrowDirection(90);
    }    
  }
  const changeButtonStyle = () => {
    if(formOpen){
      setButtonTransition(.7);
      setButtonRadius(10);
    }
    else{
      setButtonTransition(.08);
      setButtonRadius(0);
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
  const phoneNumberOption= (() => {
    let nums = [0,1,2,3,4,5,6,7,8,9];
    if(counter === 0){
    for(let i = 0; i<10;i++){
      nums = shuffle(nums);
      mappedNums.push(<select name={`digit${i}`}>{nums.map((n) => <option value={n} >{n}</option>)}</select>);
    }
    counter++;
  }
  })();  
  

  return (
    <div>
      <Collapse isOpen={formOpen} className="registerWrapper">
        <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => registerFormSubmit(event)} style={{marginBottom: "50px"}}>
          <Label>Enter your email:</Label>
          <br/>
          <InputGroup>
          <Input name="emailKey" defaultValue="Email" style={{ width: "30%" }}></Input>
          <select name="atSymbol"> 
            <option selected disabled hidden>Select the @ symbol</option>
            <option value="WRONG">!@</option>
            <option value="WRONG">.@</option>
            <option value="WRONG">@?</option>
            <option value="@"> @</option>
            <option value="WRONG">@`</option>
          </select>
          <Input name="emailAddress" defaultValue="Website.com" style={{ width: "30%"}}></Input>
          </InputGroup>
          <br/>
          <Label name="password" value="password">Password:</Label>
          <br/>
          <Input name="password"></Input>
          <br/>
          <Label>Enter first and last name:</Label>
          <InputGroup>
            <Input name="firstName" type="text" defaultValue="First Name"></Input>
            <Input name="lastName" type="text" defaultValue="Last Name"></Input>
          </InputGroup>

          <Label name="weight">Weight</Label>
          <Input name="weight"></Input>
          <Label name="phone">Phone Number</Label>
          <InputGroup id="phoneNumbers">
          { mappedNums }
          </InputGroup>
          <input type="submit" style={{transform: `translateX(${subPos}px)`}} value="Submit" id="registerSubmit" onMouseEnter={ moveSubmit }></input>
        </Form>
        { toggleTimer ? 
        <Timer seconds={Math.round(Math.random()*1000)} fontSize={100} triggeredFunction={toggleForm}/>
        :
        <span />
        }
      </Collapse>
      <Button id="registerExpandButton" style={{ borderRadius: `${buttonRadius}px ${buttonRadius}px 0 0`, transition:`${buttonTransition}s linear` }} onClick={toggleForm}>
        <span className="arrow" style={{transform: `rotate(${arrowDirection}deg)`}}></span>
      </Button>
    </div>
  );
};
