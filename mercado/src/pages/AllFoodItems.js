import { useState, useEffect } from 'react'
import axios from 'axios'

const AllFoodItems = () => {
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

  return (
    <div>
      <div>
        {produce
          ? produce.map((item) => (
              <div>
                <img src={item.picture1} width="300" />
              </div>
            ))
          : null}
      </div>
      <div>
        {foods
          ? foods.map((food) => (
              <div>
                <img src={food.picture1} width="200" />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}
export default AllFoodItems
