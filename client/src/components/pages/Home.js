import React from 'react'
import './Home.css'
import ProductList from '../Product/ProductList'
import HomeCarousel from '../carousels/homeCarousel'
import PubCarousel from '../carousels/pubCarousel'
import StoreList from '../Stores/StoreList'

const Home = () => {
  return (
    <div className="apphome">
      <HomeCarousel />
      {/* <iframe width="900" height="506" src="https://www.youtube.com/embed/fUDDsZ2I_gk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <ProductList />
      <PubCarousel />
      <StoreList />
    </div>
  )
}

export default Home
