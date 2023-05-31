import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  let navigate = useNavigate()
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get('http://localhost:3001/services')
      setServices(response.data)
    }
    getServices()
  }, [])

  const viewService = (id) => {
    navigate(`/services/${id}`)
  }

  return (
    <div>
      {services
        ? services.map((service) => (
            <div
              className="service-container"
              onClick={() => {
                viewService(service.id)
              }}
            >
              <h2>Description: {service.description}</h2>
              <h1>Price: {services.price}</h1>
              <img src={service.picture1} width="200" />
            </div>
          ))
        : null}
    </div>
  )
}
export default Services
