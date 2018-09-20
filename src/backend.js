import axios from 'axios'

let $axios = axios.create({
  baseURL: '/api/',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
})

// Request Interceptor
$axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Fake Token'
  return config
})

// Response Interceptor to handle and log errors
$axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Handle Error
  console.log(error)
  return Promise.reject(error)
})

export default {

  fetchResource (systemID, environment) {
    return $axios.get(`https://5hqo4qcoek.execute-api.eu-west-1.amazonaws.com/` + environment + `/vortice/public/systems/` + systemID)
      .then(response => response.data)
  },

  fetchSecureResource (systemID, environment) {
    let url = `https://hxp1br9mpk.execute-api.eu-west-1.amazonaws.com/qa/vortice/public/systems/`
    if (environment !== undefined && environment === 'dev') {
      url = `https://9igb19rgr1.execute-api.eu-west-1.amazonaws.com/dev/vortice/public/systems/`
    }
    return $axios.get(url + systemID)
      .then(response => response.data)
  }
}
