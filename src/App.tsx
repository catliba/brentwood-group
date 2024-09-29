import { useState } from 'react'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import StockPhoto1 from '../src/pngs/AdobeStock_292966064_Preview.jpeg'
import StockPhoto2 from '../src/pngs/AdobeStock_435902263_Preview.jpeg'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='product-png'>
        <img src={StockPhoto1} alt="First Image" />
        <img src={StockPhoto2} alt="Second Image" />
      </div>
      <Footer />
    </>
  )
}

export default App
