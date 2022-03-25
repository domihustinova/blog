import { useState, useEffect } from 'react'
import { AxiosError } from 'axios'
import { format } from 'date-fns'

import ArticlePreview from '../components/ArticlePreview/ArticlePreview'

type Props = {
  id: string
  imageId: string
  created: string
  perex: string
  title: string
}

const ArticlePreviewContainer = ({ id, imageId, created, perex, title }: Props) => {
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    getImage()
  }, [])

  const getImage = async () => {
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
    } catch (err) {
      const error = err as AxiosError
      console.log(error)
    }
  }

  return (
    <ArticlePreview>
      <ArticlePreview.Image src={image} />
      <ArticlePreview.Content>
        <ArticlePreview.Title title={title} />
        <ArticlePreview.Info author="Domi" created={format(Date.parse(created), 'MM/dd/yyy')} />
        <ArticlePreview.Perex text={perex} />
        <ArticlePreview.ButtonLink to={`/article/${id}`} />
      </ArticlePreview.Content>
    </ArticlePreview>
  )
}

export default ArticlePreviewContainer
