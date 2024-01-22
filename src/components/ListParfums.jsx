import bdd from '../data/parfums.json'
import Parfum from './Parfum';

function ListParfums (props) {

    // Mise à jour du panier présent dans le App.js 
        const updateQtePanier2 = (qte) => {
            props.updateQtePanierFromApp(qte)
        }
    
    return (
        <>
            <h1 className=" text-center m-5 ">CHOISISSEZ VOTRE PARFUM !</h1>
            <div className="container">
                <div className="row d-flex justify-content-around">
                    { 
                        bdd.parfums.map( (parfum) => {
                            return <Parfum 
                                key={parfum.id.toString()} 
                                parfumsDetails = {parfum}
                                updateQtePanierFromListParfum = { updateQtePanier2 } 
                            ></Parfum>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ListParfums;
