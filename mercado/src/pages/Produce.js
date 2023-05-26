import { useState, useEffect } from 'react'
import axios from 'axios'

const Produce = () => {
  const [produce, setProduce] = useState([])

  useEffect(() => {
    const getProduce = async () => {
      const response = await axios.get('http://localhost:3001/produce')
      setProduce(response.data)
    }
    getProduce()
  }, [])

  return (
    <div>
      {produce
        ? produce.map((item) => (
            <div>
              <h2>description: {item.description}</h2>
              <h1>Price: ${item.price}</h1>
              <img src={item.picture1} width="300" />
            </div>
          ))
        : null}
    </div>
  )
}
export default Produce
