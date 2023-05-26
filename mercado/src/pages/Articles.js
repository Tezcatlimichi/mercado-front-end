import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('http://localhost:3001/community')
      setArticles(response.data)
    }
    getArticles()
  }, [])

  return (
    <div>
      {articles
        ? articles.map((article) => (
            <div>
              <h2>description: {article.description}</h2>
              <h3>Read about it : {article.link}</h3>
              <img src={article.picture1} width="600" />
            </div>
          ))
        : null}
    </div>
  )
}
export default Articles
