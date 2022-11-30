import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reiciendis, facere eveniet, possimus, libero quia eaque qui totam
            placeat maiores iure quam aspernatur sunt suscipit! Quia nulla
            ratione distinctio temporibus, odit repudiandae accusamus qui natus
            modi voluptatem cum velit blanditiis vitae? Atque error eos velit
            iusto, doloribus necessitatibus non cupiditate?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reiciendis, facere eveniet, possimus, libero quia eaque qui totam
            placeat maiores iure quam aspernatur sunt suscipit! Quia nulla
            ratione distinctio temporibus, odit repudiandae accusamus qui natus
            modi voluptatem cum velit blanditiis vitae? Atque error eos velit
            iusto, doloribus necessitatibus non cupiditate?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
