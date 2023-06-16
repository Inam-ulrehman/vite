import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('auth_token')
// import.meta.env.VITE_PUBLIC_WEBSITE
const { VITE_PUBLIC_API } = import.meta.env
const customFetch = axios.create({
  baseURL: `${VITE_PUBLIC_API}/api/v1`,
})

customFetch.defaults.headers.common['Authorization'] = `Bearer ${token}`

export { customFetch }
