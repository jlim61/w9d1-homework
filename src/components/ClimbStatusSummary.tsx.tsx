import React from 'react';

interface ClimbStatusSummaryProps {
  boulders: {
    completed: boolean;
  }[];
}

const ClimbStatusSummary: React.FC<ClimbStatusSummaryProps> = ({ boulders }) => {
  const completedCount = boulders.filter((boulder) => boulder.completed).length
  const notCompletedCount = boulders.length - completedCount

  return (
    <div className="climb-status-summary">
      <p className="completed-climbs">Completed Climbs: {completedCount}</p>
      <p className="not-completed-climbs">Not Completed Climbs: {notCompletedCount}</p>
    </div>
  );
};

export default ClimbStatusSummary;
