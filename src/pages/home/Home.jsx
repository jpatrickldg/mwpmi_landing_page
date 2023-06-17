import React from 'react'
import "./Home.scss"
import { Layout } from 'antd';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  )
}

export default Home