import React from 'react';

const TechnicalTeamImages = () => {
  const techSocieties = [
    {
      name: "IOSD",
      members: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secretary",
          image: "" // Image URL
        },
        {
          id: 1,
          name: "ABC",
          role: "General Secretary",
          image: "" // Image URL
        },
        {
          id: 2,
          name: "ABC",
          role: "General Secretary",
          image: "" // Image URL
        },
        {
          id: 3,
          name: "ABC",
          role: "General Secretary",
          image: "" // Image URL
        }
      ]
    },
    {
      name: "TechXtract",
      members: [
        {
          id: 0,
          name: "Vanshika",
          role: "General Secretary",
          image: "" // Image URL
        },
        {
          id: 1,
          name: "Vanshu",
          role: "General Secretary",
          image: "" // Image URL
        },
        {
          id: 2,
          name: "Vanshu",
          role: "General Secretary",
          image: "" // Image URL
        },
        {
          id: 3,
          name: "Vanshu",
          role: "General Secretary",
          image: "" // Image URL
        }
      ]
    }
  ];

  return (
    <div>
      {techSocieties.map((society, index) => (
        <div key={index}>
          <h2>{society.name}</h2>
          {society.members.map((member) => (
            <div key={member.id}>
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechnicalTeamImages;
