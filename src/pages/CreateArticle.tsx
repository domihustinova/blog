import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { useAuthState } from '../utils/context'
import { Routes } from '../utils/types'
import CreateArticle from '../components/CreateArticle/CreateArticle'
import NavbarContainer from '../containers/Navbar'

const CreateArticlePage = () => {
  const [title, setTitle] = useState('')
  const [perex, setPerex] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [selectedImage, setSelectedImage] = useState()
  const [displayPreview, setDisplayPreview] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { ua_token } = useAuthState()
  const navigate = useNavigate()

  const handleImageUpload = e => {
    setSelectedImage(e.target.files[0])

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result.toString())
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handlePublishArticle = async event => {
    event.preventDefault()

    setIsLoading(true)
    if (!selectedImage) {
      setError('Please upload an image!')
      setIsLoading(false)
      return
    }

    const formData = new FormData()
    formData.append('image', selectedImage)
    const imageId = await uploadImage(formData)

    const payload = {
      title,
      perex,
      content,
      imageId,
    }

    createArticle(payload)
    setIsLoading(false)
    navigate(Routes.MyArticles)
  }

  const uploadImage = async payload => {
    const url = `https://fullstack.exercise.applifting.cz/images`

    const config = {
      headers: {
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        Authorization: `${ua_token}`,
      },
    }

    try {
      const response = await axios.post(url, payload, config)
      return response.data[0].imageId
    } catch (error) {
      console.log(error)
    }
  }

  const createArticle = async payload => {
    const url = `https://fullstack.exercise.applifting.cz/articles`

    const config = {
      headers: {
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        Authorization: `${ua_token}`,
      },
    }

    try {
      await axios.post(url, payload, config)
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageDelete = () => {
    setImage('')
  }

  return (
    <>
      <NavbarContainer />
      <CreateArticle>
        <CreateArticle.Form
          onSubmit={handlePublishArticle}
          method="POST"
          encType="multipart/form-data"
        >
          <CreateArticle.TitleWrapper>
            <CreateArticle.Title>Create new article</CreateArticle.Title>
            <CreateArticle.SubmitButton type="submit">
              {isLoading ? 'Publishing...' : 'Publish Article'}
            </CreateArticle.SubmitButton>
          </CreateArticle.TitleWrapper>
          <CreateArticle.Input
            id="title"
            name="Article Title"
            label="Article Title"
            type="text"
            value={title}
            placeholder="My First Article"
            onChange={({ target }) => setTitle(target.value)}
            autoComplete="off"
            required
          />
          <CreateArticle.ImageUpload
            id="image"
            name="Image"
            label="Featured image"
            onChange={handleImageUpload}
            src={image}
            isImageUploaded={!!image}
            handleDelete={handleImageDelete}
            required
            error={error}
          />
          <CreateArticle.Input
            id="perex"
            name="Article Perex"
            label="Article Perex"
            type="text"
            value={perex}
            placeholder=""
            onChange={({ target }) => setPerex(target.value)}
            autoComplete="off"
            required
          />
          <CreateArticle.InputContent
            id="content"
            name="Content"
            label="Content"
            value={content}
            placeholder="Supports markdown. Yay!"
            onChange={({ target }) => setContent(target.value)}
            autoComplete="off"
            required
            onButtonClick={() => setDisplayPreview(!displayPreview)}
            buttonText={displayPreview ? 'Hide Preview' : 'Show Preview'}
          />
        </CreateArticle.Form>
        {displayPreview && (
          <CreateArticle.Preview>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </CreateArticle.Preview>
        )}
      </CreateArticle>
    </>
  )
}

export default CreateArticlePage
