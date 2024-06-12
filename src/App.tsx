import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/common.ts";
import {useEffect} from "react";
import {getUsersFetch} from "./redux/reducers/userReducer.ts";
import {User} from "./models/user.ts";

function App() {
  const dispatch = useDispatch();
  const users: Array<User> = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    dispatch(getUsersFetch())
  }, [])

  console.log(users)

  return (
    <>
      <ul>
        {users.map((user: User) => <li key={user.id} className="text-2xl text-red-500">
          {user?.name}
        </li>)}
      </ul>
    </>
  )
}

export default App
