import Navbar from "../components/Navbar"
import { useState } from 'react'



const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const authToken = true

    return (
        <div className="overlay">  
            <Navbar 
                minimal={false} 
                authToken={false} 
                setShowModal={setShowModal} 
                showModal={showModal} 
                setIsSignUp={setIsSignUp}
            />
            <div className="Home">
                <h1 className="primary-title">Swipe Right</h1>
                        <button className="primary-button">
                            {!authToken ? 'Signout' : 'Create Account'}
                        </button>
            </div>
        </div>
    )
}

export default Home;