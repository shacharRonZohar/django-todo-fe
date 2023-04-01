import Axios, { AxiosError } from 'axios'
// import type { Endpoints } from '@/models/endpoints.js'

const BASE_URL = import.meta.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:8000/'

const axios = Axios.create({
  // withCredentials: true
})

export const httpService = {
  get(endpoint: string, data?: unknown) {
    return ajax(endpoint, 'GET', data)
  },
  post(endpoint: string, data?: unknown) {
    return ajax(endpoint, 'POST', data)
  },
  put(endpoint: string, data?: unknown) {
    return ajax(endpoint, 'PUT', data)
  },
  delete(endpoint: string, data?: unknown) {
    return ajax(endpoint, 'DELETE', data)
  }
}

async function ajax(endpoint: string, method = 'GET', data: unknown | null = null) {
  console.log('data:', data)
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null
    })
    return res.data
  } catch (err) {
    console.log('Had error in while making an ajax call:', err)
    // if (err instanceof AxiosError && err.response?.status === 401) {
    //   sessionStorage.clear()
    //   window.location.assign('/')
    // }
    // throw err
  }
}
