import bdd from '../data/parfums.json'
import Parfum from './Parfum';

function ListParfums () {
    
    return (
        <>
            <h1 className=" text-center m-5 ">CHOISISSEZ VOTRE PARFUM !</h1>
            <div className="container">
                <div className="row d-flex justify-content-around">
                    { 
                        bdd.parfums.map( (parfum) => {
                            return <Parfum key={parfum.id.toString()} parfumsDetails = {parfum}></Parfum>
                        })
                    }
                </div>
            </div>
            
        </>
    )


}

export default ListParfums;
