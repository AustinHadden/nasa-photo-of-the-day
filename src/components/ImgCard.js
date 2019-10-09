import React from "react";

const ImgCard = props => {
    return (
        <div className="card-container">
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img className="pic-of-day" alt="nasa picture of the day" src={props.url} />
            <p>{props.explanation}</p>
        </div>
    )
}

export default ImgCard;