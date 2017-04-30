import {
  COORDINATS_FETCH_REQUESTED,
  SET_NOTIFICATIONS_BY_LOCATION,
  APPROVE_NOTIFY,
  RESOLVE_NOTIFY
} from 'constants'

export const getPosition = () => ({
  type: COORDINATS_FETCH_REQUESTED,
})

export const setNotify = payload => ({
  type: SET_NOTIFICATIONS_BY_LOCATION,
  payload
})

export const approve = payload => ({
  type: APPROVE_NOTIFY,
  payload
})

export const resolve = payload => ({
  type: RESOLVE_NOTIFY,
  payload
})
