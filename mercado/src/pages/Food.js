import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Food = () => {
  let navigate = useNavigate()
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getFoods = async () => {
      const response = await axios.get('http://localhost:3001/food')
      setFoods(response.data)
    }
    getFoods()
  }, [])

  const viewFood = (id) => {
    navigate(`/food/${id}`)
  }

  return (
    <div>
      {foods
        ? foods.map((food) => (
            <div
              className="food-container"
              onClick={() => {
                viewFood(food.id)
              }}
            >
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
