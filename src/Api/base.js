import config from '../../config'

export const request = (url, options) => {
  const optQuery = options.query || {}
  const query = Object.keys(optQuery)
    .reduce((acc, key) => acc ? `${acc}&${key}=${optQuery[key]}`: `?${key}=${optQuery[key]}`, '')
  const preparedUrl = `${config.endpoint}${url}${query}`
  return fetch(preparedUrl, options).then(r => r.json())
}
