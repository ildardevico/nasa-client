import {
  COORDINATS_FETCH_REQUESTED,
  SET_NOTIFICATIONS_BY_LOCATION
} from 'constants'

export const getPosition = () => ({
  type: COORDINATS_FETCH_REQUESTED,
})

export const setNotify = payload => ({
  type: SET_NOTIFICATIONS_BY_LOCATION,
  payload
})
