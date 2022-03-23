import { ReactNode } from 'react'

import { Author, Container, Content, Date, Image, InfoWrapper, Title } from './styles/Article'

interface Props {
  children: ReactNode
}

const Article = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const ArticleContent = ({ children }: Props) => {
  return <Content>{children}</Content>
}

const ArticleTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>
}

const ArticleInfo = ({ author, created }: { author: string; created: string }) => {
  return (
    <InfoWrapper>
      <Author>{author}</Author>
      <Date>{created}</Date>
    </InfoWrapper>
  )
}

const ArticleImage = ({ src }: { src: string }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Image src={src} />
}

Article.Image = ArticleImage
Article.Title = ArticleTitle
Article.Content = ArticleContent
Article.Info = ArticleInfo

export default Article
