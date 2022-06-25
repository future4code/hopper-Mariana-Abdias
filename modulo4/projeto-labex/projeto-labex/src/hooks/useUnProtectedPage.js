import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useUnProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token === null) {
      navigate('/admin/trips/list')
    }
  }, [navigate])
}

export default useUnProtectedPage
