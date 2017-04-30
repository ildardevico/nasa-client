import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  COORDINATS_FETCH_REQUESTED,
  COORDINATS_FETCH_SUCCEEDED,
  COORDINATS_FETCH_FAILED,
  SET_NOTIFICATIONS_BY_LOCATION,
  GET_NOTIFICATIONS_BY_LOCATION,
  ADD_NOTIFICATION
} from 'constants'
import * as Api from 'Api'

function* fetchCoordinates(action) {
  const coordinates = yield call(Api.getCurrCoord)
  yield put({ type: COORDINATS_FETCH_SUCCEEDED, coordinates })
  const { notifies } = yield call(() => Api.getNotificationsByLocation(coordinates.coords))
  yield put({ type: GET_NOTIFICATIONS_BY_LOCATION, notifies })
}

function* addNotification(action) {
const { notify } = yield call(() => Api.setNotificationsByLocation(action.payload))
  yield put({ type: ADD_NOTIFICATION, notify })
}

export default function* rootSaga() {
  yield [
    takeLatest(COORDINATS_FETCH_REQUESTED, fetchCoordinates),
    takeEvery(SET_NOTIFICATIONS_BY_LOCATION, addNotification)
  ]
}