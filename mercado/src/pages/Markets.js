import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Markets = () => {
  let navigate = useNavigate()
  const [markets, setMarkets] = useState([])

  useEffect(() => {
    const getMarkets = async () => {
      const response = await axios.get(`http://localhost:3001/markets`)
      setMarkets(response.data)
    }
    getMarkets()
  }, [])

  const viewMarket = (id) => {
    navigate(`/markets/${id}`)
  }

  return (
    <div>
      {markets
        ? markets.map((market) => (
            <div
              className="markets-container"
              onClick={() => {
                viewMarket(market.id)
              }}
            >
              <h2>{market.description}</h2>
              <img src={market.picture1} width="600" />
            </div>
          ))
        : null}
    </div>
  )
}

export default Markets
