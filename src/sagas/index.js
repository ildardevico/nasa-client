import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  COORDINATS_FETCH_REQUESTED,
  COORDINATS_FETCH_SUCCEEDED,
  COORDINATS_FETCH_FAILED,
} from 'constants';

import * as Api from 'Api';
console.log(Api)
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCoordinates(action) {
   try {
      const coordinates = yield call(Api.getCurrCoord);
      yield put({type: COORDINATS_FETCH_SUCCEEDED, coordinates});
   } catch (e) {
      yield put({type: COORDINATS_FETCH_FAILED, message: e.message});
   }
}

export default function* rootSaga() {
  yield takeLatest(COORDINATS_FETCH_REQUESTED, fetchCoordinates);
}