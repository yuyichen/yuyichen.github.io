import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'token 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'
  }
})

export default {
  gists: () => request.get('/gists/565641cdf3b930e6619171ae6b41b2f1').then(res => res.data)
}