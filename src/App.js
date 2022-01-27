
import React, { useState } from "react";
import { useEffect } from "react";
import {  getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Display from "./components/Display";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [state, setState ] = useState({
    data: {},
    isActive: false,
  });

  const updateState = (u) => {
    setState(previousState => {
      return {
        ...previousState,
        data: u,
        isActive: "true"
      }
    });

  }
  
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
              <td><button onClick={()=>updateState(u)}>View</button></td>
            </tr>
            )}
        </tbody>
      </table>
      <div className="display">
        {state.isActive && <Display data={state.data}/>}
        
      </div>
    </div>
  );
}

export default App;
