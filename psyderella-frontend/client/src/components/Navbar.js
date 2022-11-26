
const Navbar = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }


    return (
        <nav>
        <div className="logo-container">
            <img className="logo" src="images/Psyderella_logo.png" />
        </div>
        {!authToken && <button 
            onClick={handleClick} 
            className="nav-button"
            disabled={showModal}
        >Log in</button>}
    </nav>
    )
}

export default Navbar;