
const Navbar = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }


    return (
        
        <nav>
        <dim className="logo-container">
            <img className="logo" src="images/Psyderella_logo.png" />
        </dim>
        {!authToken && <button 
            onClick={handleClick} 
            className="nav-button"
            disabled={showModal}
        >Log in</button>}
    </nav>
    )
}

export default Navbar;