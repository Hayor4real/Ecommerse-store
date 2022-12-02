import React from 'react'
import "./FeaturedProducts.scss"


const FeaturedProducts = ({type}) => {
  const data = [
  {
    id:1,
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id:2,
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id:3,
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Skirt",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id:4,
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Hat",
    isNew: true,
    oldPrice: 19,
    price: 12
  },

  ]
  return (
    <div className='featuredProducts'>
    <div className='top'>
      <h1>{type}products</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo exercitationem aliquid minus, ab sed quia officiis natus repellat ut, expedita sint molestias in repellendus commodi dolorem magnam voluptate alias incidunt possimus? Tempora labore minus sapiente. Minus cumque ut unde quis.</p>
      
    </div>
    <div className='bottom'>
    
    </div>
    </div>
  )
}

export default FeaturedProducts