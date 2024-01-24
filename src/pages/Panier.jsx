import { Link } from 'react-router-dom';
import logo from '../images/logo-kene.png';
import calculerLePanier from '../utilitaires/calculerLePanier';
import PanierCard from '../components/PanierCard';


function Panier () {

    const panier = calculerLePanier(JSON.parse(localStorage.getItem("panier")));

    console.log(panier);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg  mb-3">
                <Link to= "/">
                    <div className="container-fluid mt-2">
                        < img id='logoInNavbar' src={logo} alt="logo " />
                    </div>
                </Link>
            </nav>
            <h1>Votre panier</h1>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-10">
                        {panier.map( (element, index) => {
                            return <PanierCard key={index}/>
                        })}
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>


            
            
        </>
    )
}

export default Panier;