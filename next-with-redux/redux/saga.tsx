import {
  all,
  takeLatest,
  put,
  call,
  takeEvery,
  delay,
  take,
} from "redux-saga/effects";
import actionsTypes from "./actions";
import { actionType } from "./reducer";

function* increament() {
  yield takeLatest(actionsTypes.CALL_ADD_COUNTER, doIncreament);
}
function* doIncreament(action: actionType) {
  const action2 = take(actionsTypes.CALL_ADD_COUNTER);
  yield console.log({ action2 });
  yield put({
    type: actionsTypes.ADD_COUNTER,
  });
}

function* rootSaga() {
  yield all([increament()]);
}

export default rootSaga;
