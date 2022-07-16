import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout';

function CategoryScreen() {
  const {query} = useRouter()
  const catId = query.catId;
  return (
    <Layout title={catId}>
      <div><h1>category</h1></div>
    </Layout>
  )
}

export default CategoryScreen;