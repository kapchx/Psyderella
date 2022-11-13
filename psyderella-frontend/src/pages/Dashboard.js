import TinderCard from 'react-tinder-card'
import {useState} from 'react'

const Dashboard = () => {

    const characters = [
        {
            name: "Julius Berry",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        },
        {
            name: "Richar Handrikcs",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        },
        {
            name: "Billie Nichols",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        },
        {
            name: "Ellena Garrett",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        },
        {
            name: "Malikah Fry",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        }
    ]

    const [lastDirection, setLastDirection] = useState()

    const swiped =(direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className="dashboard">
            HI 
            <div className="swipe-container">
                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard
                            className="swipe"
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div
                                style={{ backgroundImage: "url(" + character.url + ")" }}
                                className="card">
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;