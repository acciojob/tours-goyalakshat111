import React from "react";
import Tour from "./Tour";

const Tours = ({tours,removeTour})=>{

    return(
        <>
        {
            tours.map(place=>(
               <Tour key={place.id} place={place} removeTour={removeTour}/>
            ))
        }
        </>
    )
}

export default Tours;