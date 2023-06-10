import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const OneArticle = ()=>{
let {id} = useParams()

const [selectedArticle, setSelectedArticle ] = useState("")

useEffect(()=>{
  const getArticle = async () =>{
    const response = await axios.get(`http://localhost:3001/community/${id}`)
    setSelectedArticle(response.data)
  }
  getArticle()
},[])

  return(
    <div>
      <h1>{selectedArticle.description}</h1>
      <img src={selectedArticle.picture1} width="600" />
      <h2>{selectedArticle.price}</h2>
    </div>
  )
}
export default OneArticle