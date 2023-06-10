import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllFoodItems = () => {
  let navigate = useNavigate()
  const [produce, setProduce] = useState([])
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getProduce = async () => {
      const response = await axios.get('http://localhost:3001/produce')
      setProduce(response.data)
    }
    getProduce()
    const getFood = async () => {
      const response = await axios.get('http://localhost:3001/food')
      setFoods(response.data)
    }
    getFood()
  }, [])

  const viewProduce = (id) => {
    navigate(`/food/produce/${id}`)
  }
  const viewFood = (id) => {
    navigate(`/food/${id}`)
  }

  return (
    <div>
      <div>
        {produce
          ? produce.map((item) => (
              <div
                className="produce-container"
                onClick={() => {
                  viewProduce(item.id)
                }}
              >
                <img src={item.picture1} width="300" />
              </div>
            ))
          : null}
      </div>
      <div>
        {foods
          ? foods.map((food) => (
              <div
                className="food-container"
                onClick={() => {
                  viewFood(food.id)
                }}
              >
                <img src={food.picture1} width="200" />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}
export default AllFoodItems
