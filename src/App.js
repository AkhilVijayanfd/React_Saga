
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from './actions/actions';

function App(){
     const dispatch = useDispatch();
     const users = useSelector(state => state.myFirstReducer.users);
     return(
        <div>
             <button onClick={() => dispatch(getUsersFetch())}>User Name</button>
             <div> Users : {users.map((user =>(<div>{user.name}</div>)))}</div> 
        </div>

     );
}
export default App;
