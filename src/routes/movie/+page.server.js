// import 'dotenv/config'
import { env } from "$env/dynamic/private";

export const load = async () => {

  const fetchUsers = async () => {
    const userRes = await fetch('https://dummyjson.com/users?limit=10')
    const userData = await userRes.json()
    return userData.users
  }

  return {
    users: fetchUsers(),
    key: env.VITE_API_KEY
  }
  
}
