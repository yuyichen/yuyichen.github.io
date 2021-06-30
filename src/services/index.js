import axios from 'axios'

const based_token = 'Z2hwX3BKNWJ2U095WWdISkxBZjk0ZE96WDdNM3lmMGJ2UjFLelFiZg=='

const request = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${atob(based_token)}`
  }
})

// TODO 拦截报错
request.interceptors.response.use(response => {
  return response
}, error => {
  
  return Promise.reject(error)
})

export default {
  gists: () => request.get('/gists/565641cdf3b930e6619171ae6b41b2f1').then(res => res.data)
}