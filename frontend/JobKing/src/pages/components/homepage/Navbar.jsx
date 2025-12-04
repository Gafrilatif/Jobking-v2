import logo from '../../../assets/img/JobKing_Logo.png'

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <div className="navbar-left">
                    <img src={logo} alt="JobKing Logo" className="navbar-logo" />
                </div>

                <nav className="navbar-center">
                    <a href="#explore">Explore</a>
                    <a href="#why">Why JobKing?</a>
                    <a href="#support">Support</a>
                </nav>

                <div className="navbar-right">
                    <span className="navbar-lang">EN | ID</span>
                    <button className="btn btn-login" type="button">
                        Login
                    </button>
                    <button className="btn btn-signup" type="button">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
        
    )
}