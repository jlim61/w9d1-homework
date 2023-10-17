import React from 'react';

interface BoulderCardProps {
  boulder: {
    gym: string;
    grade: string;
    setter: string;
    completed: boolean;
    attempts: number;
  };
}

const BoulderCard: React.FC<BoulderCardProps> = ({ boulder }) => {
  return (
    <div className="boulder-card">
      <p className="boulder-card-details">{boulder.gym}</p>
      <p className="boulder-card-details">{boulder.grade}</p>
      <p className="boulder-card-details">{boulder.setter}</p>
      <p className="boulder-card-details">{boulder.completed ? 'Yes' : 'No'}</p>
      <p className="boulder-card-details">{boulder.attempts}</p>
    </div>
  );
};

export default BoulderCard;