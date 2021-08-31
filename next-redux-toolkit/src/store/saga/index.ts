import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { requestToGetdata, getData } from "store/data";

function* loadDataSaga() {
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/users");
    yield put(getData(res.data));
  } catch (e) {}
}

function* rootSaga() {
  yield all([takeLatest(requestToGetdata().type, loadDataSaga)]);
}

export default rootSaga;
