import '../styles/Header.css'

import logo from '../images/logo-kene.png';

function Header(){

    return (
    <nav className="navbar navbar-expand-lg  mb-3">
        <div className="container-fluid mt-2">
            <img id='logoInNavbar' src={logo} alt="logo " />
            <button className="navbar-toggler mt-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item m-2">
                        <a className="nav-link active fw-bold" aria-current="page" href="#">ACCUEIL</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;