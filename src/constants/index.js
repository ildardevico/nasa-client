export const COORDINATS_FETCH_REQUESTED = 'COORDINATS_FETCH_REQUESTED'
export const COORDINATS_FETCH_SUCCEEDED = 'COORDINATS_FETCH_SUCCEEDED'
export const COORDINATS_FETCH_FAILED = 'COORDINATS_FETCH_FAILED'

export const GET_NOTIFICATIONS_BY_LOCATION = 'GET_NOTIFICATIONS_BY_LOCATION'
export const SET_NOTIFICATIONS_BY_LOCATION = 'SET_NOTIFICATIONS_BY_LOCATION'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const APPROVE_NOTIFY = 'APPROVE_NOTIFY'
export const RESOLVE_NOTIFY = 'RESOLVE_NOTIFY'

export const statuses =  {
  1: {
    name: 'PENDING',
    button: 'APPROVE',
    style: 'info',
  },
  2: {
    name: 'IN_PROGRESS',
    button: 'RESOLVE',
    style: 'danger'
  },
  3: {
    name: 'RESOLVED',
    style: 'success'
  }
};
