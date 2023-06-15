import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [markets, setMarkets] = useState([])
  const [art, setArt] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(`http://localhost:3001/community`)
      setArticles(response.data)
    }
    getArticles()
    const getMarkets = async () => {
      const response = await axios.get(`http://localhost:3001/markets`)
      setMarkets(response.data)
    }
    getMarkets()
    const getArt = async () => {
      const response = await axios.get(`http://localhost:3001/art`)
      setArt(response.data)
    }
    getArt()
    const getServices = async () => {
      const response = await axios.get(`http://localhost:3001/services`)
      setServices(response.data)
    }
    getServices()
  }, [])

  const viewArticle = (id) => {
    navigate(`/community/${id}`)
  }

  const viewMarket = (id) => {
    navigate(`/markets/${id}`)
  }

  const viewArt = (id) => {
    navigate(`/art/${id}`)
  }

  const viewService = (id) => {
    navigate(`/services/${id}`)
  }

  return (
    <div>
      <div className="home-article-container">
        {articles
          ? articles.map((article) => (
              <div
                onClick={() => {
                  viewArticle(article.id)
                }}
              >
                <img src={article.picture1} width="300" />
              </div>
            ))
          : null}
      </div>
      <div className="home-market-container">
        {markets
          ? markets.map((market) => (
              <div
                onClick={() => {
                  viewMarket(market.id)
                }}
              >
                <img src={market.picture1} width="400" />
              </div>
            ))
          : null}
      </div>
      <div className="home-art-container">
        {art
          ? art.map((artPiece) => (
              <div
                onClick={() => {
                  viewArt(artPiece.id)
                }}
              >
                <img src={artPiece.picture1} width="500" />
              </div>
            ))
          : null}
      </div>
      <div className="home-services-container">
        {services
          ? services.map((service) => (
              <div
                onClick={() => {
                  viewService(service.id)
                }}
              >
                <img src={service.picture1} width="600" />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}
export default Home
