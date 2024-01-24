import '../styles/HomePage.css'

import ButtonPanier from '../components/ButtonPanier';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ListParfums from '../components/ListParfums';
import { useState } from 'react';


function HomePage () {

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

export default HomePage;