import React from 'react';
import "./Services.css";

const Serv = ({ img, suffix, para }) => {
  return (
    <article className="service-card">
      <div className="service-title-row">
        <img src={img} alt="" aria-hidden="true" />
        <h3 className="service-title">{suffix}</h3>
      </div>
      <p className="service-para">{para}</p>
    </article>
  );
};

export default Serv;
