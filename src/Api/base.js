import config from '../../config'

export const request = (url, options) => {
  const optQuery = options.query || {}
  const query = Object.keys(optQuery)
    .reduce((acc, key) => acc ? `${acc}&${key}=${optQuery[key]}`: `?${key}=${optQuery[key]}`, '')
  const preparedUrl = `${config.endpoint}${url}${query}`
  const preparedOptions = {
    ...options,
    body: options.body ? JSON.stringify(options.body): null,
    headers: options.body ? {
      ...options.headers,
      'content-type': 'application/json',
    }: options.headers
  }
  return fetch(preparedUrl, preparedOptions).then(r => r.json())
}
