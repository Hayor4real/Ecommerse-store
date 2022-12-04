import React from 'react'
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"





const FeaturedProducts = ({type}) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
    <div className='top'>
      <h1>{type}products</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo exercitationem aliquid minus, ab sed quia officiis natus repellat ut, expedita sint molestias in repellendus commodi dolorem magnam voluptate alias incidunt possimus? Tempora labore minus sapiente. Minus cumque ut unde quis.</p>
      
    </div>
    <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;