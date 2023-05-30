import { useState, useEffect } from 'react'
import axios from 'axios'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get('http://localhost:3001/services')
      setServices(response.data)
    }
    getServices()
  }, [])

  return (
    <div>
      {services
        ? services.map((service) => (
            <div>
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
