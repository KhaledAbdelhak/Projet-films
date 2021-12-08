import Favoris from "./components/favoris-list"
import Loader from "../../components/Loader"

/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
    console.log(props.favoris);
    return (
    <div className="flex-row border-top pt-4 p-2">
        {
            props.favoris < 1 && <h1 className="d-flex justify-content-center" >Aucun favori...</h1>
        }
         
        {props.loaded && 
            <div className="d-flex flex-row border flex-fill pt-4 p-2">
                <Favoris  
                favoris={props.favoris}
                removeFavori={props.removeFavori}
        /> 
            </div>
        }
        {!props.loaded && <Loader />}   
    </div>
    )
}