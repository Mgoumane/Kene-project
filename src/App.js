import './App.css';
import './components/Header'

import Header from './components/Header';
import ButtonPanier from './components/ButtonPanier';
import ListParfums from './components/ListParfums';
import Footer from './components/Footer';
import Panier  from './pages/Panier';

import { useState } from 'react';



function App() {
  
  // Création du panier dans le local-storage si il n'hexiste pas
    if ( !localStorage.getItem("panier") ) {
      let panierInit = [];
      localStorage.setItem("panier", JSON.stringify(panierInit));
    }

  // Initialisation du panier
    let userPanier = JSON.parse(localStorage.getItem("panier"));
    const quantiteDansPanier = userPanier.reduce(( a , c ) => a + parseInt(c.quantity), 0 );
    const [qtePanier, setQtePanier] = useState(quantiteDansPanier);

  const updateQtePanier = (qte) => {
    let result = parseInt(quantiteDansPanier) + qte
    setQtePanier(result)
  }

  return (
    <>
      <div>
        <ButtonPanier qtePanier = {qtePanier}></ButtonPanier>
        <Header></Header>
        <ListParfums updateQtePanierFromApp = { updateQtePanier } ></ListParfums>
        <Footer></Footer>
      </div>
  
    </>
  );

}

export default App;
