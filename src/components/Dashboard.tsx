import React from 'react'
import BoulderList from './BoulderList'
import ClimbStatusSummary from './ClimbStatusSummary.tsx'
import AverageGrade from './AverageGrade.tsx'

const Dashboard: React.FC = () => {

    const boulders = [
        {
            id: 1,
            gym: 'Sender One',
            grade: 'V3',
            setter: 'Prez',
            completed: true,
            attempts: 1
        },
        {
            id: 2,
            gym: 'Sender One',
            grade: 'V5',
            setter: 'Prez',
            completed: false,
            attempts: 4
        },
        {
            id: 3,
            gym: 'Sender One',
            grade: 'V1',
            setter: 'Prez',
            completed: true,
            attempts: 1
        },
        {
            id: 4,
            gym: 'Movement',
            grade: 'V5',
            setter: 'Matteo',
            completed: true,
            attempts: 5
        },
        {
            id: 5,
            gym: 'Movement',
            grade: 'V3',
            setter: 'CJ',
            completed: true,
            attempts: 1
        },
        {
            id: 6,
            gym: 'Movement',
            grade: 'V4',
            setter: 'Matteo',
            completed: false,
            attempts: 3
        },
        {
            id: 7,
            gym: 'Hangar Mission Viejo',
            grade: 'V4',
            setter: 'DB',
            completed: false,
            attempts: 6
        },
        {
            id: 8,
            gym: 'Hangar Mission Viejo',
            grade: 'V2',
            setter: 'Annie',
            completed: true,
            attempts: 1
        },
        {
            id: 9,
            gym: 'Hangar Mission Viejo',
            grade: 'V4',
            setter: 'Annie',
            completed: true,
            attempts: 3
        },
        {
            id: 10,
            gym: 'Hangar Orange',
            grade: 'V3',
            setter: 'TJ',
            completed: true,
            attempts: 2
        },
        {
            id: 11,
            gym: 'Hangar Orange',
            grade: 'V5',
            setter: 'TJ',
            completed: false,
            attempts: 4
        },
        {
            id: 12,
            gym: 'Hangar Orange',
            grade: 'V4',
            setter: 'TJ',
            completed: true,
            attempts: 3
        }
    ]

    return (
        <div>
            <h1 className="bouldering-dashboard-label">Bouldering Dashboard</h1>
            <div className="climbing-average-div">
                <ClimbStatusSummary boulders={boulders} />
                <AverageGrade boulders={boulders} />
            </div>
            <BoulderList boulders={boulders} />
        </div>
    )
}

export default Dashboard