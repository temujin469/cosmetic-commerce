import Banner from '../components/Banner'
import Categories from '../components/BrandsCat'
import Layout from '../components/Layout'
import ProductWrapper from '../components/ProductWrapper'
import SearchInput from '../components/SearchInput'

const Home = () => {
  return (
      <Layout>
        <div className='sm:hidden m-3'>
          <SearchInput/>
        </div>
        <Banner/>
        <Categories/>
        <ProductWrapper/>
      </Layout>
  )
}

export default Home
