import { Link } from 'react-router-dom';
import logo from '../images/logo-kene.png';

function Panier () {

    const panier = localStorage.getItem("panier")

    console.log(panier)

    return (
        <>
            <nav className="navbar navbar-expand-lg  mb-3">
                <Link to= "/">
                    <div className="container-fluid mt-2">
                        <img id='logoInNavbar' src={logo} alt="logo " />
                    </div>
                </Link>
                
            </nav>
            <p>Bienvenue dans le panier</p>
        </>
    )
}

export default Panier;