import React from 'react'
import { useEffect } from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss"
import axios from "axios"



const FeaturedProducts = ({type}) => {
  

const [data, setData] = useState([])

useEffect(() => {
  const fetchData = async ()=> {
    try {
     const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
      headers:{
        Authorization:"bearer "+ process.env.REACT_APP_API_TOKEN,
      },
     }); //This is how i fetched the data using strapi
     setData(res.data.data)
    }catch(err){
      console.log(err)
    }
  };
  fetchData()
}, []);

console.log(data)


  return (
    <div className='featuredProducts'>
    <div className='top'>
      <h1>{type}products</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo exercitationem aliquid minus, ab sed quia officiis natus repellat ut, expedita sint molestias in repellendus commodi dolorem magnam voluptate alias incidunt possimus? Tempora labore minus sapiente. Minus cumque ut unde quis.</p>
      
    </div>
    <div className='bottom'>
    {data.map(item =>(
      <Card item={item} key={item.id} />
    ))}
    </div>
    </div>
  )
}

export default FeaturedProducts