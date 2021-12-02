import Favoris from "./components/favoris-list"

/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
    console.log(props.favoris);
    return (
    <div className="flex-row border-top pt-4 p-2">
        {
            props.favoris < 1 && <h1 className="d-flex justify-content-center" >Aucun favori...</h1>
        }
        <Favoris  
                favoris={props.favoris}
                removeFavori={props.removeFavori}
        />     
    </div>
    )
}