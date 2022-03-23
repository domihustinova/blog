import { useState, useEffect } from 'react'
import axios from 'axios'

import NavbarContainer from '../containers/Navbar'
import ArticlePreviewContainer from '../containers/ArticlePreview'
import ArticlePreview from '../components/ArticlePreview/ArticlePreview'

const RecentArticlesPage = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const url = 'https://fullstack.exercise.applifting.cz/articles'

    const config = {
      headers: {
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
      },
    }

    try {
      const response = await axios.get(url, config)
      setArticles(response.data.items.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <>
      <NavbarContainer />
      <ArticlePreview.PageWrapper>
        <ArticlePreview.PageTitle />
        {articles.map(({ articleId, imageId, createdAt, perex, title }) => (
          <ArticlePreviewContainer
            key={articleId}
            id={articleId}
            imageId={imageId}
            created={createdAt}
            perex={perex}
            title={title}
          />
        ))}
      </ArticlePreview.PageWrapper>
    </>
  )
}

export default RecentArticlesPage
