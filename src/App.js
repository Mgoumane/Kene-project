import './App.css';
import HomePage from './pages/HomePage';

function App() {
  
  // Création du panier dans le local-storage si il n'hexiste pas
    if ( !localStorage.getItem("panier") ) {
      let panierInit = [];
      localStorage.setItem("panier", JSON.stringify(panierInit));
    }

  return (
    <>
      <div>
        <HomePage></HomePage>
      </div>
  
    </>
  );

}

export default App;
