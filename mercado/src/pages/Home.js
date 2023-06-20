import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [markets, setMarkets] = useState([])

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
  }, [])

  const viewArticle = (id) => {
    navigate(`/community/${id}`)
  }

  const viewMarket = (id) => {
    navigate(`/markets/${id}`)
  }
  const borderOnly = {
    border: '5px solid black'
  }
  const styles = {
    margin: 'auto',
    border: ' 5px solid black'
  }
  return (
    <div className="home-content-container">
      <div home-article-bigger>
        <div className="home-article-container">
          {articles
            ? articles.map((article) => (
                <div
                  style={styles}
                  onClick={() => {
                    viewArticle(article.id)
                  }}
                >
                  <h2>{article.title}</h2>
                  <img src={article.picture1} width="300" />
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="home-market-container">
        {markets
          ? markets.map((market) => (
              <div
                style={styles}
                onClick={() => {
                  viewMarket(market.id)
                }}
              >
                <img src={market.picture1} width="300" />
              </div>
            ))
          : null}
      </div>
      <div className="home-nav-container">
        <div style={borderOnly} className="home-services">
          Services
        </div>
        <div style={borderOnly} className="home-produce">
          Produce
        </div>
        <div style={borderOnly} className="home-markets">
          Markets
        </div>
        <div style={borderOnly} className="home-food">
          Food
        </div>
        <div style={borderOnly} className="home-art">
          Art
        </div>
        <div style={borderOnly} className="home-events">
          Events
        </div>
        <div style={borderOnly} className="home-community">
          Community
        </div>
      </div>
    </div>
  )
}
export default Home
