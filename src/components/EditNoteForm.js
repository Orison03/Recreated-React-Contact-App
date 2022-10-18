import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditUser } from "../actions/userActions";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/configer";

function EditNoteForm ({ userData, deleteUser, handleEdit, hide }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(userData.name);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [location, setLocation] = useState(userData.location);
  const handleSubmit = async(e) => {
    e.preventDefault();
    let userInfo = { id: userData.id, name, phoneNumber, location };
        try {
        const userRef = doc(db, "allContact", userData.id);
        await updateDoc(userRef, userInfo);
        } catch (error) {
        console.log(error);
        }

    dispatch(EditUser({ id: userData.id, name, phoneNumber, location }));
    setName("");
    setPhoneNumber("");
    setLocation("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="phoneNumber"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="location"
          placeholder="Enter Location"
          value={location}
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

export default EditNoteForm;
