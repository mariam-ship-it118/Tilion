import React from 'react';
import './OurTeam.css';
import p1 from "../Assets/team1.svg";
import p2 from "../Assets/teamtwo.svg";
import p3 from "../Assets/member3.svg";
import p4 from "../Assets/member4.svg";
import p5 from "../Assets/member5.svg";
import p6 from "../Assets/member6.svg";

const OurTeam = () => {
  const teamMembers = [
    {

      id: 1,
      name: "Ahmed Omar",
      role: "Hr manager",
      imageUrl: p1, 
      type: "office"
    },

    {
      id: 2,
      name: "Maram Omar",
      role: "Product manager",
      imageUrl: p2,
      type: "headshot"
    },
    {
      id: 3,
      name: "Ahmen Omar",
      role: "Software engineer",
      imageUrl: p3,
      type: "office"
    },
    {
      id: 4,
      name: "Ahmed Omar",
      role: "Hr manager",
      imageUrl: p4,
      type: "office"
    },
    {
      id: 5,
      name: "Maram Omar",
      role: "Product manager",
      imageUrl: p5, 
      type: "headshot"
    },
    {
      id: 6,
      name: "Ahmen Omar",
      role: "Software engineer",
      imageUrl: p6 , 
      type: "office"
    }
  ];

  return (
    <section className="our-team-section">
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="image-container">
              <img src={member.imageUrl} alt={member.name} />
              {member.type === "headshot" && member.logo && (
                <div className="logo-overlay">
                  <div className="logo-icon">{member.logo.icon}</div>
                  <div className="logo-text">{member.logo.text}</div>
                </div>
              )}
            </div>
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;