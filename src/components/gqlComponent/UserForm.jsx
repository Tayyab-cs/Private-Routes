import React, { useEffect, useState } from "react";
import {
  CREATE_USER_MUTATION,
  UPDATE_USER_MUTATION,
  DELETE_USER_MUTATION,
} from "../../graphql/mutation.js";
import { useMutation, useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../graphql/queries.js";

function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, refetch } = useQuery(LOAD_USERS);
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
  };

  const handleUpdateUser = () => {
    updateUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
  };

  const handleDeleteUser = () => {
    if (email) {
      deleteUser({
        variables: {
          email: email,
        },
      });
    } else {
      console.error("Email is required for deleting user.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
      <button onClick={handleUpdateUser}> Update User</button>
      <button onClick={handleDeleteUser}> Delete User</button>
    </div>
  );
}

export default UserForm;
