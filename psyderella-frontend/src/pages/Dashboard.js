import TinderCard from 'react-tinder-card';
import { useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import ChatContainer from '../components/ChatContainer';
import axios from 'axios';

function Dashboard() {

  const [user, setUser] = useState(null)
  const [cookies, setCooike, removeCookie] = useCookies(['user'])


  const userId = cookies.UserId

  const getUser = async()=>{
    try{
      const response = await axios.get('http://localhost:8000/user',{
        params:{userId}
      })
      setUser(response.data)
    } catch(error){
      console.log(error);
    }
  }


  useEffect(() => {
    getUser()
  }, [ user ])

  const characters = [
    {
      name: 'Julius Berry',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    },
    {
      name: 'Richar Handrikcs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    },
    {
      name: 'Billie Nichols',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    },
    {
      name: 'Ellena Garrett',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    },
    {
      name: 'Malikah Fry',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log(`removing: ${nameToDelete}`);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name}left the screen`);
  };
  return (
    <>
    {user &&
    <div className="dashboard">
      <ChatContainer user={user}/>
      <div className="swipe-container">
        <div className="card-container">

          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? (
              <p>
                You swiped
                {lastDirection}
              </p>
            ) : <p />}
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Dashboard;
