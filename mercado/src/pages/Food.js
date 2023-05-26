import { useState, useEffect } from 'react'
import axios from 'axios'

const Food = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getFoods = async () => {
      const response = await axios.get('http://localhost:3001/food')
      setFoods(response.data)
    }
    getFoods()
  }, [])

  return (
    <div>
      {foods
        ? foods.map((food) => (
            <div>
              <h2>Description: {food.description}</h2>
              <h1>Price: ${food.price}</h1>
              <img src={food.picture1} width="200" />
            </div>
          ))
        : null}
    </div>
  )
}
export default Food
