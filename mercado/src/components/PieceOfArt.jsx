import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const PieceOfArt = ()=>{
let {id} = useParams()

const [selectedArt, setSelectedArt] = useState("")

useEffect(()=>{
  const getArtPiece = async()=>{
    const response = await axios.get(`http://localhost:3001/art/${id}`)
    setSelectedArt(response.data)
  }
  getArtPiece()
},[])




  return(
    <div>
      <h1>{selectedArt.description}</h1>
      <img src={selectedArt.picture1} width="600" />
    </div>
  )
}
export default PieceOfArt