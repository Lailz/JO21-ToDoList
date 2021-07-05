import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../store/actions/authActions";
import { AddBookDiv, Button } from "../styles";

const Signin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user));
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddBookDiv>
        <h2>Sign in</h2>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter username"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="enter password"
        />
        <Button type="submit">Sign in</Button>
      </AddBookDiv>
    </form>
  );
};

export default Signin;
