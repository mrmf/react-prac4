import React , { useState, useEffect } from "react";

const Test = (props) => { 
  
  const [photos, setPhotos] = useState([]);
  useEffect(
      ()=>{
        fetch(`https://jsonplaceholder.ir/photos`)
        .then((res) => res.json())
        .then((result) => setPhotos(result));
      },[]);
  
    return( 
      <div className="row">
      {
       photos.map((photo) => {
        return(

            <div>
                {photo.title}
                <br />
            </div>

       )
       }
      


       ) 
      }
      </div>
       )

}

export default Test;