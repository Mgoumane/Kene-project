import './App.css';

import HomePage from './pages/HomePage';

import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/panier',
    element: <div>Page panier</div>
  }
])

function App() {
  
  // Création du panier dans le local-storage si il n'hexiste pas
    if ( !localStorage.getItem("panier") ) {
      let panierInit = [];
      localStorage.setItem("panier", JSON.stringify(panierInit));
    }

  return <RouterProvider router={router}/>

}

export default App;
