import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import FoodDisplay from '../../Components/foodDisplay'
import Exploremenu from '../../Components/Explore-menu/Exploremenu'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
        <Header />
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home