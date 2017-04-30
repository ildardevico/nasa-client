import combineEvents  from 'utils/combineEvents'
import { GET_NOTIFICATIONS_BY_LOCATION, ADD_NOTIFICATION } from 'constants'

const getList = (state, { notifies }) =>
  notifies.reduce((notifies, notify) => ({
     ...notifies,
    [notify._id]: notify
  }), {})

export const notifies = combineEvents({
  [GET_NOTIFICATIONS_BY_LOCATION]: getList,
  [ADD_NOTIFICATION]: (state, { notify }) => ({ ...state, [notify._id]: notify})
}, {})
