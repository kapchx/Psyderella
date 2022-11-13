const Navbar = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }


    return (
        
        <nav>
        <dim className="logo-container">
            <img className="logo" src={minimal ? "https://policies.tinder.com/static/ad5fe8e55f591b89e6ccd5fce88a5179/906b5/tinder_white_flame_black_outline.png" : "https://1000logos.net/wp-content/uploads/2018/07/tinder-app-logo.jpg"} />
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