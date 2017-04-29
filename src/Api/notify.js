import { request } from './base'

const NOTIFY_URL = `notify`

export const getNotificationsByLocation = (coords) => {
  const { longitude, latitude } = coords
  return request(
    NOTIFY_URL,
    {
      query: {
        latitude,
        longitude,
      }
    }
  )
}
