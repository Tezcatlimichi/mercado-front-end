import { useState, useEffect } from 'react'
import axios from 'axios'

const Markets = () => {
  const [markets, setMarkets] = useState([])

  useEffect(() => {
    const getMarkets = async () => {
      const response = await axios.get(`http://localhost:3001/markets`)
      setMarkets(response.data)
    }
    getMarkets()
  }, [])

  return (
    <div>
      {markets
        ? markets.map((market) => (
            <div>
              <h2>{market.description}</h2>
              <img src={market.picture1} width="600" />
            </div>
          ))
        : null}
    </div>
  )
}

export default Markets
