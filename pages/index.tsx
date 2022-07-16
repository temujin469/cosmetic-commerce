import Banner from '../components/Banner'
import Categories from '../components/BrandsCat'
import Layout from '../components/Layout'
import ProductWrapper from '../components/ProductWrapper'

const Home = () => {
  return (
      <Layout>
        <Banner/>
        <Categories/>
        <ProductWrapper/>
      </Layout>
  )
}

export default Home
