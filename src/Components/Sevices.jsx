import React from 'react';
import "./Services.css";
import Active from "../Assets/a.svg";
import Safety from "../Assets/s.svg";
import Connect from "../Assets/c.svg";
import Serv from './Serv';
      
const services = [
 
    {
    img: Safety,
    suffix: "afety",
    para: "Kids can freely post their pictures online without worrying about adults or cyberbullying.",
  },

  {
    img: Connect,
    suffix: "onnect",
    para: "They can easily connect with their friends only from their phone contacts or request sent from parent.",
  },

  {
    img: Active,
    suffix: "ctivities",
   },

];

const Services = () => {
  return (
    <section className="services-section">
    

      <div className="services-heading-wrap">
        <h2 className="services-heading">
          Services
          <svg viewBox="0 0 100 100" className="services-star" aria-hidden="true">
            <path d="M 75 5 C 75 20, 80 22, 95 22 C 80 22, 75 24, 75 39 C 75 24, 70 22, 55 22 C 70 22, 75 20, 75 5 Z" fill="#0C1331" />
          </svg>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((item) => (
          <Serv key={item.suffix} img={item.img} suffix={item.suffix} para={item.para} />
        ))}
      </div>

      
    </section>
  );
};

export default Services;
