// AverageGrade.tsx
import React from 'react';

interface AverageGradeProps {
  boulders: {
    grade: string;
  }[];
}

const AverageGrade: React.FC<AverageGradeProps> = ({ boulders }) => {
  const gradeNumbers = boulders.map((boulder) => {
    const match = boulder.grade.match(/V(\d+)/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    return 0;
  });

  const totalGrade = gradeNumbers.reduce((acc, grade) => acc + grade, 0);
  const averageGrade = totalGrade / gradeNumbers.length;

  return (
    <div className="average-grade">
      <p>Average Grade: V{averageGrade.toFixed(1)}</p>
    </div>
  );
};

export default AverageGrade;
