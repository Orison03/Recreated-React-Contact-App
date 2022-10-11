import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/configer";

function AddUserForm({ AddNewUser }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

  let addForm = { name, phoneNumber,location, id: uuidv4() };
  await setDoc(doc(db, "allContact", addForm.id), { addForm });
    setName("");
    setPhoneNumber("");
    setLocation("");
  }; 

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> WWE Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          placeholder="Enter WWE WRESTLER"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          value={phoneNumber}
          placeholder="Enter Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserForm);
