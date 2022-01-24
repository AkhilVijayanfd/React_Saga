import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from './actions/actions';
import Button from "./components/button";

function App(){
     const dispatch = useDispatch();
     const users = useSelector(state => state.myFirstReducer.users);
    
     return(
        <div className="App">
             <button onClick={() => dispatch(getUsersFetch())}>Enter to View API</button>
             <table border="2">
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
