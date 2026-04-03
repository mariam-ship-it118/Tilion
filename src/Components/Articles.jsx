import React from 'react';
import './Articles.css';

const ArticleSection = ({ 
  paragraph, 
  imageSrc, 
  imageAlt = "Article image", 
  heading,
  reverseLayout = false
}) => {
  return (
    <section className="article-section">
      <div className={`article-container ${reverseLayout ? 'layout-reversed' : ''}`}>
        
        {/* Paragraph Column */}
        <div className="article-content article-text">
          <p className="article-paragraph">{paragraph}</p>
        </div>

        {/* Image Column */}
        <div className="article-content article-image-wrapper">
          <img src={imageSrc} alt={imageAlt} className="article-image" />
        </div>

        {/* Heading Column */}
        <div className="article-content article-heading">
          <h2 className="article-title" dangerouslySetInnerHTML={{ __html: heading }} />
        </div>

      </div>
    </section>
  );
};

export default ArticleSection;