import React from 'react';
import './EventsCards.css';

const HoverCard = ({ 
  imageUrl = "https://via.placeholder.com/600x400", 
  title = "Create a magic book with your parent", 
  time = "from 5:00pm to 8:00pm",
  tag = "girls only"
}) => {
  return (
    <>
    <div className="hover-card">
      <img src={imageUrl} alt={title} className="hover-card-image" />
      
      <div className="hover-card-overlay">
        <div className="hover-card-content">
          <h3 className="hover-card-title">{title}</h3>
          <p className="hover-card-detail">{time}</p>
          <p className="hover-card-detail">{tag}</p>
        </div>
      </div>
    </div>
    {/* <button className='vmbtn'>View more</button> */}
    </>
  );
};

export default HoverCard;