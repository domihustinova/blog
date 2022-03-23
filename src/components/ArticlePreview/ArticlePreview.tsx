import { ReactNode } from 'react'

import {
  Author,
  ButtonLink,
  Container,
  Content,
  Date,
  Image,
  InfoWrapper,
  PageTitle,
  PageWrapper,
  Perex,
  Title,
} from './styles/ArticlePreview'

interface Props {
  children: ReactNode
}

const ArticlePreview = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const ArticlePreviewContent = ({ children }: Props) => {
  return <Content>{children}</Content>
}

const ArticlePreviewTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>
}

const ArticlePreviewInfo = ({ author, created }: { author: string; created: string }) => {
  return (
    <InfoWrapper>
      <Author>{author}</Author>
      <Date>{created}</Date>
    </InfoWrapper>
  )
}

const ArticlePreviewPerex = ({ text }: { text: string }) => {
  return <Perex>{text}</Perex>
}

const ArticlePreviewPageTitle = () => {
  return <PageTitle>Recent Articles</PageTitle>
}

const ArticlePreviewPageWrapper = ({ children }: Props) => {
  return <PageWrapper>{children}</PageWrapper>
}

const ArticlePreviewImage = ({ src }: { src: string }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Image src={src} />
}

const ArticlePreviewButtonLink = ({ to }: { to: string }) => {
  return <ButtonLink to={to}>Read whole article</ButtonLink>
}

ArticlePreview.Image = ArticlePreviewImage
ArticlePreview.ButtonLink = ArticlePreviewButtonLink
ArticlePreview.Title = ArticlePreviewTitle
ArticlePreview.Content = ArticlePreviewContent
ArticlePreview.Info = ArticlePreviewInfo
ArticlePreview.Perex = ArticlePreviewPerex
ArticlePreview.PageTitle = ArticlePreviewPageTitle
ArticlePreview.PageWrapper = ArticlePreviewPageWrapper

export default ArticlePreview
