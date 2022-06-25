import { useState, useEffect } from 'react'
import { baseUrl } from '../services/url'
import axios from 'axios'

const useRequest = (endpoint, initialState) => {
  const [data, setData] = useState(initialState)

  const getData = () => {
    axios
      .get(`${baseUrl}${endpoint}`, {
        headers: {
          auth: localStorage.getItem('token')
        }
      })
      .then(res => setData(res.data))
      .catch(err => alert(err.response.data.message))
  }

  useEffect(() => {
    getData()
  }, [endpoint])

  return [data, getData]
}

export default useRequest
