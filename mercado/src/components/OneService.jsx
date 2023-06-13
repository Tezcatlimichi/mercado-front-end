import React from 'react'
import axios from 'axios'
import  { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



const OneService =()=>{
  let {id} = useParams()

  const [selectedService, setSelectedService] = useState("")

  useEffect(()=>{
    const getService = async()=>{
      const response = await axios.get(`http://localhost:3001/services/${id}`)
      setSelectedService(response.data)
    }
    getService()
  },[])



  return(
    <div>
      <h1>{selectedService.description}</h1>
      <img src={selectedService.picture1} width="600"/>
    </div>
  )
}
export default OneService