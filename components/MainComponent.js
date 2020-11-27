import React, {createContext} from "react";
import styled from "styled-components";
import PlayerCard from "./cards/PlayerCard";
import {useRecoilValue} from "recoil";
import {_players} from "../pages/_app";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 3rem;
    padding: 1.5rem;
    border: 1px solid #dddddd;
    border-radius: 10px;
    box-shadow: 0px 1px 8px lightgray;
`;

export const playerContext = createContext(), {Provider: PlayerProvider} = playerContext;

function MainComponent(){
    const players = useRecoilValue(_players);
    const playersOK = Object.entries(players).length !== 0;

    return (
        <MainContainer>
            {playersOK && players.map(player => {
                return (
                    <PlayerProvider key={player.id} value={player}>
                        <PlayerCard key={player.id}/>
                    </PlayerProvider>
                )
            })}
        </MainContainer>
    )
}

export default MainComponent;