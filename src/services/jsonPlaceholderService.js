import axios from 'axios'

// const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const usersUrl = 'http://localhost:3333/users'

export const JsonPlaceholderService = () => {
  return {
    getUsers: async () => {
      try {
        const result = await axios.get(usersUrl)
        if (result) {
          return { data: result.data }
        }
      } catch (e) {
        console.log('JsonPlaceholderService', e.response.status, e.message)
        return {
          error: true,
          status: e.response.status,
          message: e.message
        }
      }
    }
  }
}
