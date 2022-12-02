import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {
    const data = [
        {
          id:1,
          img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Long Sleeve Graphic T-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12
        },
        {
          id:2,
          img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
          img2: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Hat",
          isNew: true,
          oldPrice: 19,
          price: 12
        },
      
        ];

  return (
    <div className='list'>{
        data?.map(item=> (
            <Card item={item} key={item.id} />
        ))
    }</div>
  )
}

export default List