import type { ReactNode } from 'react'

import { Button, Container, Title, TitleWrapper } from './styles/MyArticles'
import { Routes } from '../../utils/types'

interface Props {
  children: ReactNode
}

const MyArticles = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const MyArticlesTitleWrapper = ({ children }: Props) => {
  return <TitleWrapper>{children}</TitleWrapper>
}

const MyArticlesTitle = ({ children }: Props) => {
  return <Title>{children}</Title>
}

const MyArticlesButton = () => {
  return (
    <Button role="link" to={Routes.CreateArticle}>
      Create new article
    </Button>
  )
}

MyArticles.Button = MyArticlesButton
MyArticles.Title = MyArticlesTitle
MyArticles.TitleWrapper = MyArticlesTitleWrapper

export default MyArticles
