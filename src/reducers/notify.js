import combineEvents  from 'utils/combineEvents'
import { GET_NOTIFICATIONS_BY_LOCATION } from 'constants'

const getList = (state, { notifies }) =>
  notifies.reduce((notifies, notify) => ({
     ...acc,
    [notify._id]: notify
  }), {})

export const notifies = combineEvents({
  [GET_NOTIFICATIONS_BY_LOCATION]: getList
}, {})
