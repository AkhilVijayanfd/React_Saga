
import React from "react";
import { useEffect } from "react";
import {  getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      <h1>Welcome to React with Redux Saga </h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h2 key={i}>{user.name}</h2>)}
    </div>
  );
}

export default App;
