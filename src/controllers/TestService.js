import axios from 'axios'

class TestService {
  static get (id, token) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${id}?token=${token}`)
        resolve(res.data)
      } catch (err) {
        reject(err)
      }
    })
  }
  static sync (token, id, step, next, data = undefined) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`${id}`, { token: token, step: step, next: next, data: data })
        resolve(res.data)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default TestService
