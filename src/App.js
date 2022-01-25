
import React from "react";
import { useEffect } from "react";
import {  getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import Button from "./components/button";
import './App.css';

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
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>VIEW</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u =>
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td><Button/></td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
