import Logo from '../images/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <img src={Logo} alt="" className="logo-airbnb" />
            </div>
        </nav>
    )
}

export default Navbar