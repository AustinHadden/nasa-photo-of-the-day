import React from "react";
import styled from "styled-components";

const Title = styled.h2`
    font-size: 30px;
`;

const Date = styled.h3`
    font-size: 20px;
`;

const Img = styled.img`
    width: 30%;
    heigth: 30%;
    border-radius: 10px;
`;

const Explanation = styled.p`
    font-size: 18px;
    margin: 3%;
`;

const ImgCard = props => {
    return (
        <div className="card-container">
            <Title>{props.title}</Title>
            <Date>{props.date}</Date>
            <Img alt="nasa picture of the day" src={props.url} />
            <Explanation>{props.explanation}</Explanation>
        </div>
    )
}

export default ImgCard;