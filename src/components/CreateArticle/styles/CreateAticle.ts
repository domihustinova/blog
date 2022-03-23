import styled from 'styled-components/macro'

export const Container = styled.div`
  margin: 0 auto;
  width: 760px;
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;
`

export const Title = styled.h1`
  margin-right: 32px;
`

export const InputWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`

export const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 16px;
  width: 760px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  transition: border 0.3s ease-in-out;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #323c46;
  }

  &::placeholder {
    color: #6c757d;
  }
`

export const InputContent = styled.textarea`
  padding: 16px;
  width: 760px;
  height: 400px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  transition: border 0.3s ease-in-out;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #323c46;
  }

  &::placeholder {
    color: #6c757d;
  }
`

export const Button = styled.button`
  max-width: 140px;
  width: 100%;
  height: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background-color: #007bff;
  border: 2px solid #007bff;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border 0.3s ease-in-out;

  &:hover {
    background-color: #2b7efb;
  }

  &:focus {
    outline: none;
    border: 2px solid #274472;
  }
`

export const Form = styled.form`
  text-align: left;
`

export const CategoryTitle = styled.div`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`

export const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
`

export const ImageInput = styled.input`
  display: none;
`

export const ImageLabel = styled.label`
  width: 147px;
  height: 36px;
  color: #ffffff;
  padding-top: 6px;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
`

export const ImageUploadedLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #007bff;
  cursor: pointer;
  margin-right: 8px;
`

export const UploadImageWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const ImageDelete = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #dc3545;
  cursor: pointer;
  background: transparent;
  border: none;
`

export const ImageFooter = styled.div``

export const PreviewWrapper = styled.div`
  text-align: left;
`

export const Preview = styled.div`
  width: 100%;
  height: 100%;
  min-width: 760px;
  min-height: 400px;
  padding: 16px;
  margin-bottom: 32px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  font-size: 17px;
`

export const PreviewButton = styled.button`
  color: #007bff;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #274472;
  }
`

export const Error = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #dc3545;
`
