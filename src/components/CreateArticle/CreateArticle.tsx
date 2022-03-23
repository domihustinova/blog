import type {
  ReactNode,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  FormHTMLAttributes,
} from 'react'

import {
  Button,
  CategoryTitle,
  Container,
  Error,
  Form,
  ImageDelete,
  ImageFooter,
  ImageInput,
  ImageLabel,
  ImagePreview,
  ImageUploadedLabel,
  ImageWrapper,
  Input,
  InputContent,
  InputWrapper,
  Label,
  Preview,
  PreviewButton,
  PreviewWrapper,
  Title,
  TitleWrapper,
  UploadImageWrapper,
} from './styles/CreateAticle'

interface Props {
  children: ReactNode
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  src?: string
  isImageUploaded?: boolean
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void
  error?: string
}

interface InputContentProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  buttonText: string
}

interface ButtonProps {
  type: 'submit' | 'reset' | 'button'
  children: ReactNode
}

const CreateArticle = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const CreateArticleTitleWrapper = ({ children }: Props) => {
  return <TitleWrapper>{children}</TitleWrapper>
}

const CreateArticleTitle = ({ children }: Props) => {
  return <Title>{children}</Title>
}

const CreateArticleForm = ({ onSubmit, children }: FormHTMLAttributes<HTMLFormElement>) => {
  return <Form onSubmit={onSubmit}>{children}</Form>
}

const CreateArticleInput = ({ id, label, ...restProps }: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...restProps} />
    </InputWrapper>
  )
}

const CreateArticleImageUpload = ({
  id,
  name,
  label,
  onChange,
  src,
  isImageUploaded,
  handleDelete,
  error,
}: InputProps) => {
  return (
    <UploadImageWrapper>
      <CategoryTitle>{label}</CategoryTitle>
      {isImageUploaded ? (
        <>
          <ImageWrapper>
            <ImagePreview src={src} alt="preview" />
          </ImageWrapper>
          <ImageFooter>
            <ImageInput id={id} name={name} type="file" accept="image/*" onChange={onChange} />
            <ImageUploadedLabel htmlFor={id}>Upload new</ImageUploadedLabel>
            <ImageDelete onClick={handleDelete} type="button">
              Delete
            </ImageDelete>
          </ImageFooter>
        </>
      ) : (
        <>
          <ImageInput id={id} name={name} type="file" accept="image/*" onChange={onChange} />
          <ImageLabel htmlFor={id}>Upload an Image</ImageLabel>
          <Error>{error}</Error>
        </>
      )}
    </UploadImageWrapper>
  )
}

const CreateArticleSubmitButton = ({ type, children }: ButtonProps) => {
  return <Button type={type}>{children}</Button>
}

const CreateArticleInputContent = ({
  id,
  label,
  onButtonClick,
  buttonText,
  ...restProps
}: InputContentProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputContent id={id} {...restProps} />
      <PreviewButton onClick={onButtonClick} type="button">
        {buttonText}
      </PreviewButton>
    </InputWrapper>
  )
}

const CreateArticlePreview = ({ children }: Props) => {
  return (
    <PreviewWrapper>
      <Preview>{children}</Preview>
    </PreviewWrapper>
  )
}

CreateArticle.Form = CreateArticleForm
CreateArticle.ImageUpload = CreateArticleImageUpload
CreateArticle.Input = CreateArticleInput
CreateArticle.InputContent = CreateArticleInputContent
CreateArticle.Preview = CreateArticlePreview
CreateArticle.SubmitButton = CreateArticleSubmitButton
CreateArticle.Title = CreateArticleTitle
CreateArticle.TitleWrapper = CreateArticleTitleWrapper

export default CreateArticle
