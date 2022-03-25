import { useState, useEffect } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

import NavbarContainer from '../containers/Navbar'
import ArticlePreviewContainer from '../containers/ArticlePreview'
import ArticlePreview from '../components/ArticlePreview/ArticlePreview'

type Article = {
  articleId: string
  title: string
  perex: string
  imageId: string
  createdAt: string
  lastUpdatedAt: string
}

const RecentArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
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
      const response: AxiosResponse = await axios.get(url, config)
      setArticles(
        response.data.items.sort((a: Article, b: Article) => (a.createdAt < b.createdAt ? 1 : -1)),
      )
    } catch (err) {
      const error = err as AxiosError
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
