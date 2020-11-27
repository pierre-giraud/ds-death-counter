import React, {useContext} from "react";
import styled from "styled-components";
import PlayerCardTitle from "./PlayerCardTitle";
import PlayerCardBattles from "./PlayerCardBattles";
import {playerContext} from "../MainComponent";

const CardContainer = styled.div`
    width: 45%;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-shadow: 0px 1px 5px lightgray;
    padding: 1.5rem;
    margin: 1rem;

    @media (max-width: 1260px) {
        width: 100%;
        margin: 1rem 0 1rem 0;
    }
`;

function PlayerCard(){
    const name = useContext(playerContext).name;

    return (
        <CardContainer>
            <PlayerCardTitle>{name}</PlayerCardTitle>
            <PlayerCardBattles/>
        </CardContainer>
    )
}

export default PlayerCard;