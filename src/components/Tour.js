import React, { useState } from "react";

const Tour = ({place,removeTour}) => {

  const { id, name, info, image, price } = place;

  const [readMore,setReadMore] = useState(false);

  return (
    <>
    <div>
        <img src={image} alt={name.slice(0, 10)} />
        <div>
        <h4>{name}</h4>
        <p>{price}</p>
        </div>
        <p>{readMore?info : info.slice(0, 200)}
          <button onClick={()=>setReadMore(!readMore)}>
            {readMore?"See less":"Show More"}
          </button>
        </p>
        <button onClick={()=>removeTour(id)}>Remove</button>
        </div>
    </>
  );
};

export default Tour;
