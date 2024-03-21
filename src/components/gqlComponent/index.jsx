import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useQuery, useMutation } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ALL_COUNTRIES } from "../../graphql/queries.js";
import { ALL_LANGUAGES } from "../../graphql/queries.js";
import { LOAD_USERS } from "../../graphql/queries.js";
import UserForm from "./UserForm.jsx";

const GqlComponent = () => {
  loadDevMessages();
  loadErrorMessages();
  const [name, setName] = useState("");

  // const countries = useQuery(ALL_COUNTRIES);
  // const languages = useQuery(ALL_LANGUAGES);
  const { data, loading, error } = useQuery(LOAD_USERS);
  console.log("user: ", data);

  const submit = (e) => {
    e.preventDefault();
    // onSubmit({ name, type });
  };

  // if (countries.loading || languages.loading) {
  //   return <Spinner />;
  // }

  return (
    <div>
      <h1>Add new user</h1>
      <UserForm />
    </div>
  );
};

export default GqlComponent;
