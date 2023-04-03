import Axios, { AxiosError } from 'axios'
// import type { Endpoints } from '@/models/endpoints.js'

const BASE_URL = import.meta.env.PROD ? '/api/' : 'http://localhost:8000/'

const axios = Axios.create({
  withCredentials: import.meta.env.PROD
})

export const httpService = {
  get<T>(endpoint: string, data?: unknown) {
    return ajax<T>(endpoint, 'GET', data)
  },
  post<T>(endpoint: string, data?: unknown) {
    return ajax<T>(endpoint, 'POST', data)
  },
  put<T>(endpoint: string, data?: unknown) {
    return ajax<T>(endpoint, 'PUT', data)
  },
  delete<T>(endpoint: string, data?: unknown) {
    return ajax<T>(endpoint, 'DELETE', data)
  }
}

async function ajax<T>(endpoint: string, method = 'GET', data: unknown | null = null) {
  console.log('data:', data)
  try {
    const res = await axios<T>({
      url: `${BASE_URL}${endpoint}/`,
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
    throw err
  }
}
