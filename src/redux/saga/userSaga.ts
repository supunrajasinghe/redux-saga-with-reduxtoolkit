import {call, put, takeEvery} from 'redux-saga/effects'
import {getUsersFailure, getUsersSuccess} from "../reducers/userReducer.ts";
import {User} from "../../models/user.ts";

function* fetchUsers() {
  try {
    const users: Response = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'))
    const formattedUsers: Array<User> = yield users.json();
    yield put(getUsersSuccess(formattedUsers))
  } catch {
    yield put(getUsersFailure);
  }
}

function* userSaga() {
  yield takeEvery('user/getUsersFetch', fetchUsers);
}

export default userSaga;