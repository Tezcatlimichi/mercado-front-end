import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const OneProduce = ()=>{
let {id} = useParams()
const [selectedProduce, setSelectedProduce] = useState("")

useEffect(()=>{
  const getProduce = async ()=>{
    const response = await axios.get(`http://localhost:3001/produce/${id}`)
    setSelectedProduce(response.data)
  }
  getProduce()
},[])

  return(
    <div>
      <h1>{selectedProduce.description}</h1>
      <img src={selectedProduce.picture1} width="600"/>
      <h2>Price:${selectedProduce.price}</h2>
    </div>
  )
}
export default OneProduce