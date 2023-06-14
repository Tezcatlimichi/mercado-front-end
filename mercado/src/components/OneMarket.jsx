import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const OneMarket = ()=>{
  let {id} = useParams()
  const [selectedMarket, setSelectedMarket] = useState("")

  useEffect(()=>{
    const getMarket = async()=>{
      const response = await axios.get(`http://localhost:3001/markets/${id}`)
      setSelectedMarket(response.data)
    }
    getMarket()
  },[])

  return (
    <div>
      <h1>{selectedMarket.description}</h1>
      <img src={selectedMarket.picture1} width="600"/>
      <img src={selectedMarket.picture2} width="600"/>
    </div>
  )
}

export default OneMarket