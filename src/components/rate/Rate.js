import React from 'react';
import  fullStar from "../../assets/images/rate/startRempli.png";
import emptyStar from "../../assets/images/rate/startVide.png";


function Rate(props) {
      const rate = props.rate;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate-contenair">
        {notes.map((note) =>
          rate >= note ? (
            <img
              key={note}
              className="star"
              src={fullStar}
              alt="star"
            />
          ) : (
            <img
              key={note}
              className="star"
              src={emptyStar}
              alt="star"
            />
          )
        )}
      </div>
    );
}

export default Rate;
