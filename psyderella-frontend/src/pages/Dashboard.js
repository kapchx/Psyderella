import TinderCard from 'react-tinder-card';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ChatContainer from '../components/ChatContainer';
import axios from 'axios';

function Dashboard() {

  const [user, setUser] = useState(null)
  const [genderedUsers, setGenderedUsers] = useState(null)
  const [cookies, setCooike, removeCookie] = useCookies(['user'])


  const userId = cookies.UserId

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user', {
        params: { userId }
      })
      setUser(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getGenderedUsers = async () => {
    try {
      let role_needed = ""
      if(user.role === "Patient"){
          role_needed = "Psychologist";
      }else{
          role_needed = "Patient";
      }
      const response = await axios.get('http://localhost:8000/gendered-users', {
        params: { gender: user?.gender_interest,
                  role: role_needed}
      })
      setGenderedUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getUser()
    getGenderedUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, genderedUsers])


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
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">

              {genderedUsers?.map((genderedUser) => (
                <>
                  <TinderCard
                    className="swipe"
                    key={genderedUser.user_id}
                    onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                    onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                    <div
                      style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                      className="card">
                      <h3 bacground>{genderedUser.first_name}</h3>
                      <h3 >{genderedUser.about}</h3>
                    </div>
                    
                  </TinderCard>
                 
                </>
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
