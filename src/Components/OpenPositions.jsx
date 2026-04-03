import React from 'react';
import './OpenPositions.css';

const positions = [
  { id: 1, title: 'UI/UX designer' },
  { id: 2, title: 'HR manager' },
  { id: 3, title: 'Graphic design' },
  { id: 4, title: 'Marketing\nspecialist' },
  { id: 5, title: 'UI/UX designer' },
  { id: 6, title: 'HR manager' },
  { id: 7, title: 'Graphic design' },
  { id: 8, title: 'Marketing\nspecialist' },
];

const OpenPositions = () => {
  return (
    <section className="career-section">
      <h1 className="career-heading">Open Positions</h1>
      
      <div className="career-grid">
        {positions.map((pos) => (
          <div key={pos.id} className="role-item">
            {/* Placeholder for the grey square image */}
            <div className="role-thumbnail"></div>
            
            <p className="role-name">
              {/* Handling the line break for "Marketing specialist" */}
              {pos.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenPositions;