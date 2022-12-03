import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      
        id:1,
        img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        desc: "This a tshirt from one of the best store",
        isNew: true,
        oldPrice: 19,
        price: 12
      
    },
    {
      id:2,
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "This a tshirt from one of the best store come and shop with us",
      isNew: true,
      oldPrice: 19,
      price: 12
    },

  ];

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map(item=> (
        <div className='item' key={item.id}>
          <img src={item.img} alt=""/>
           <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
                1 x ${item.price}
            </div>
           </div>
           <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart