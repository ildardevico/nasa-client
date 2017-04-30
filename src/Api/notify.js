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

export const setNotificationsByLocation = (coords) => {
  const { longitude, latitude } = coords
  return request(
    NOTIFY_URL,
    {
      method: 'POST',
      body: {
        latitude,
        longitude,
      }
    }
  )
}

export const approve = ({ id }) => request(`${NOTIFY_URL}/${id}`, { method: 'PATCH'})

export const resolve = ({ id }) => request(`${NOTIFY_URL}/${id}`, { method: 'PUT'})
