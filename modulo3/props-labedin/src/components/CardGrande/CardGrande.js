import React from 'react';
import styled from 'styled-components'

const CardBig = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `

const ImgCardBig = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <CardBig>
            <ImgCardBig src={ props.imagem } />
            <BigDiv>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </BigDiv>
        </CardBig>
    )
}

export default CardGrande;