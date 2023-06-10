import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const OneFoodItem =()=>{
let {id} = useParams()
const [selectedFood, setSelectedFood] =useState("")
useEffect(()=>{
  const getFood = async ()=>{
    const response = await axios.get(`http://localhost:3001/food/${id}`)
    setSelectedFood(response.data)
  }
  getFood()
},[])

  return(
    <div>
      <h1>{selectedFood.description}</h1>
      <img src={selectedFood.picture1} width="600"/>
      <h2>Price:${selectedFood.price}</h2>
    </div>
  )
}
export default OneFoodItem