const calculerLePanier = (tableau ) => {

    if (Array.isArray(tableau)) {

        // Créer un objet pour stocker les informations du panier
        const panier = {};
        
        // Calculer le prix total par produit
        tableau.forEach(item => {
            const { idProduit, quantity, prixProduit } = item;
            const totalProduit = parseInt(quantity, 10) * parseFloat(prixProduit);
            
            if (!panier[idProduit]) {
                panier[idProduit] = {
                idProduit,
                nomProduit: item.nomProduit,
                prixTotalProduit: 0,
                imageProduit: item.imageProduit
                };
            }
            
            panier[idProduit].prixTotalProduit += totalProduit;
        });
        
        // Convertir l'objet en tableau pour obtenir la liste des produits dans le panier
        const panierListe = Object.values(panier);
        
        return panierListe
        
    } 
    else 
    {
        console.error('Error: your argument is not an array');
        return 0
    }
}

export default calculerLePanier;