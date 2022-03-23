import MyArticles from '../components/MyArticles/MyArticles'
import NavbarContainer from '../containers/Navbar'

const MyArticlesPage = () => {
  return (
    <>
      <NavbarContainer />
      <MyArticles>
        <MyArticles.TitleWrapper>
          <MyArticles.Title>My articles</MyArticles.Title>
          <MyArticles.Button />
        </MyArticles.TitleWrapper>
      </MyArticles>
    </>
  )
}

export default MyArticlesPage
