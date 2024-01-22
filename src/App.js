import './App.css';
import Footer from './components/Footer';
import './components/Header'
import Header from './components/Header';
import ListParfums from './components/ListParfums';

function App() {

  // Création du panier dans le local-storage si il n'hexiste pas
  if ( !localStorage.getItem("panier")) {
    let panierInit = [];
    localStorage.setItem("panier", JSON.stringify(panierInit));
  }
  
  return (
    <div>
      <Header></Header>
      <ListParfums></ListParfums>
      <Footer></Footer>
    </div>
  );
}

export default App;
