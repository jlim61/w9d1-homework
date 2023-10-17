import BoulderCard from "./BoulderCard";

interface BoulderListProps {
    boulders: {
        id: number
        gym: string
        grade: string
        setter: string
        completed: boolean
        attempts: number
    }[]
}

function BoulderList({ boulders }: BoulderListProps): JSX.Element{


    return (
        <div className="bouldering-list">
        <div className="column-titles">
            <p>Location</p>
            <p>Grade</p>
            <p>Setter</p>
            <p>Completed</p>
            <p>Attempts</p>
        </div>
        {boulders.map((boulder) => (
            <BoulderCard key={boulder.id} boulder={boulder} />
        ))}
        </div>
    )
}

export default BoulderList