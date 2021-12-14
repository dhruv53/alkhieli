import React from "react";
import CardImage from "../../assets/loadingImg.jpg";

const Card=(props)=> {
  return (
    <div className="card">
      <h1>{props.num}</h1>
      <h3>
        Construction <br />
        Projects can Pivot
      </h3>
      <p>
        Construction projects can pivot and change depending on numerous variale
      </p>
      <img src={CardImage} alt="Card" className="cardImg" />
    </div>
  );
}

export default Card;
