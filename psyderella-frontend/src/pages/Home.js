import Navbar from "../components/Navbar"
import { useState } from 'react'



const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <div>  
            <Navbar 
                minimal={false} 
                authToken={false} 
                setShowModal={setShowModal} 
                showModal={showModal} 
                setIsSignUp={setIsSignUp}
            />
        </div>
    )
}

export default Home;