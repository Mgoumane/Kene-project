function Parfum (props) {

    const parfum = props.parfumsDetails

    const validationFormulaire = (event) => {
        event.preventDefault();
        const userChoice = {
            idProduit : event.target.idDuProduitChoisi.value,
            quantity : event.target.quantiteChoisi.value,
            nomProduit : event.target.nomDuProduitChoisi.value,
            prixProduit : event.target.prixDuProduitChoisi.value,
            imageProduit : event.target.imageDuProduitChoisi.value,
        }

        let userPanier = JSON.parse(localStorage.getItem("panier"));
        userPanier.push(userChoice);
        localStorage.setItem("panier", JSON.stringify(userPanier));
        
        // Mise à jour du panier présent dans le App.js 
            props.updateQtePanierFromListParfum( parseInt(userChoice.quantity));
    }

    return (
        <>  
        
            <div className="card m-5"  style={{width: "24rem"}}>
                <img src={require(`../images/imagesParfums/${parfum.image}`)} className="card-img-top" alt="..."/>
                <div className="card-body">

                    <h5 className="card-title  text-center fw-bold text-uppercase">{parfum.name}</h5>
                    <p className="text-end">{parfum.quantity}</p>
                    <p>{parfum.notes}</p>
                    <p className="card-text fw-bold ">{parfum.description}</p>
                    <p className="card-text fs-2  ">{parfum.prix}  €</p>

                    <form onSubmit={validationFormulaire}>
                        <div className="d-flex justify-content-center">
                            <p>Quantité : </p>
                            <select name="quantiteChoisi"  className="form-select fw-bold" aria-label="Default select example" style={{width: "8rem"}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <input type="hidden" value={parfum.id} name="idDuProduitChoisi"/>
                        <input type="hidden" value={parfum.name} name="nomDuProduitChoisi"/>
                        <input type="hidden" value={parfum.prix} name="prixDuProduitChoisi"/>
                        <input type="hidden" value={parfum.image} name="imageDuProduitChoisi"/>
                        <div className="text-center mt-3">
                            <button href="#" className=" btn btn-warning ">Ajouter au panier</button>
                        </div>
                    </form>        
                </div>
            </div>
        </>
    )
}

export default Parfum