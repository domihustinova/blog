import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import NavbarContainer from '../containers/Navbar'
import Article from '../components/Article/Article'

type Article = {
  articleId: string
  createdAt: string
  perex: string
  title: string
  content: string
  imageId: string
  lastUpdatedAt: string
  comments: any
}

const ArticlePage = () => {
  const [article, setArticle] = useState<Article | null>(null)
  const [image, setImage] = useState<string>('')

  const params = useParams()

  useEffect(() => {
    getArticleDetails(params?.articleId)
  }, [])

  const getArticleDetails = async (articleId: string | undefined) => {
    const url = `https://fullstack.exercise.applifting.cz/articles/${articleId}`

    const config = {
      headers: {
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
      },
    }

    try {
      const response = await axios.get(url, config)
      setArticle(response.data)
      getImage(response.data.imageId)
    } catch (error: any) {
      console.log(error)
    }
  }

  const getImage = async (imageId: string) => {
    const url = `https://fullstack.exercise.applifting.cz/images/${imageId}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
      })

      const imageBlob = await response.blob()
      const reader = new FileReader()
      reader.readAsDataURL(imageBlob)
      reader.onloadend = () => {
        const base64data = reader.result.toString()
        setImage(base64data)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <>
      <NavbarContainer />
      {article && (
        <Article>
          <Article.Title title={article.title} />
          <Article.Info
            author="Domi"
            created={format(Date.parse(article.createdAt), 'MM/dd/yyy')}
          />
          <Article.Image src={image} />
          <Article.Content>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
          </Article.Content>
        </Article>
      )}
    </>
  )
}

export default ArticlePage
