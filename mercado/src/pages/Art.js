import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Art = () => {
  let navigate = useNavigate()
  const [artWork, setArtWork] = useState([])

  useEffect(() => {
    const getArtWork = async () => {
      const response = await axios.get('http://localhost:3001/art')
      setArtWork(response.data)
      console.log(
        'response data index 1 in array picture',
        response.data[1].picture1
      )
    }
    getArtWork()
  }, [])

  const viewArt = (id) => {
    navigate(`/art/${id}`)
  }

  return (
    <div id="art-container">
      {artWork
        ? artWork.map((art) => (
            <div
              className="art-container"
              onClick={() => {
                viewArt(art.id)
              }}
            >
              <h2>Description: {art.description}</h2>
              <h2>Price: ${art.price}</h2>
              <img src={art.picture1} width="200" />
            </div>
          ))
        : null}
    </div>
  )
}
export default Art
