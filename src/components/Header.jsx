import logo from '../images/logo-kene.png';
import imageParfum from '../images/parfum.jpg'
import ButtonPanier from './ButtonPanier';

function Header(){

    return (
<>
    <nav className="navbar navbar-expand-lg  mb-3">
        <div className="container-fluid">
            <img id='logoInNavbar' src={logo} alt="logo " />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item m-2">
                        <a className="nav-link active fw-bold" aria-current="page" href="#">ACCUEIL</a>
                    </li>
                    <li className="nav-item m-2">
                        <ButtonPanier></ButtonPanier>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
    <h1 className=" text-center text-warning-emphasis"> Kéné </h1>
    <p className='text-center fs-4 '>Bienvenue dans votre boutique de parfums, choisissez vos articles et faites vous livrer à domicile !</p>
    <p className='text-center fs-5 '>Nous vous proposons des parfums à des prix défiant toutes concurrences  !</p>
    <img id='imageRuban' src={imageParfum} alt="" />
</>
    )
}

export default Header;