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
import "./Register.css";

export const Register: React.FC<any> = (props: any) => {
  const [formOpen, setFormOpen] = useState(false);
  const toggleForm = () => setFormOpen(!formOpen);
  return (
    <div>
      <Button className="arrow down" onClick={toggleForm}></Button>
      <Collapse isOpen={formOpen}>
        <Form>
          <Label>Enter your email:</Label>
          <Input name="emailKey">Email</Input>
          <select name="atSymbol">
            <option disabled>Select the @ symbol</option>
            <option value="WRONG">!@</option>
            <option value="WRONG">.@</option>
            <option value="WRONG">@?</option>
            <option value="@"> @</option>
            <option value="WRONG">@`</option>
          </select>
          <Input name="emailAddress">website</Input>
          <Label name="password">Password:</Label>
          <Input name="password"></Input>

          <InputGroup>
            <Label>Enter first name:</Label>
            <Input name="firstName" type="text"></Input>
            <Label>Enter your last name:</Label>
            <Input name="lastName" type="text"></Input>
          </InputGroup>

          <Label name="weight">Weight</Label>
          <Input name="weight"></Input>
          <Label name="phone">Phone Number</Label>
          <input type="number" id="phoneNumber" value="0"></input>
        </Form>
      </Collapse>
    </div>
  );
};
