import React from 'react';
import styled from 'styled-components'

const CardSmall = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    justify-content: flex-start;
    text-align: center;
`

const ImgCardSmall = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4CardSmall = styled.h4`
    margin-bottom: 15px;
    padding: 0 5px;
`

const CardDiv = styled.div`
    display: flex;
`



function CardPequeno(props) {
    return (
        <CardSmall>
            <ImgCardSmall src={props.imagem} />
            <CardDiv>
                <H4CardSmall>{props.nome}</H4CardSmall>
                <p>{props.descricao}</p>
            </CardDiv>
        </CardSmall>
    )
}

export default CardPequeno;