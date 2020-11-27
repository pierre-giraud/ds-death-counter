import React from 'react';
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import {useSetRecoilState} from "recoil";
import {_battleStatus} from "../pages/_app";

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    background-color: white;
    width: 30%;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-shadow: 0px 1px 5px lightgray;
    padding: 1.5rem;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1260px) {
        width: 90%;
        margin: 1rem 0 1rem 0;
    }
`;

function ConfirmUpdate(){
    const setBattleStatus = useSetRecoilState(_battleStatus);

    function handleClick() {
        setBattleStatus(false);
        document.body.classList.remove(styles.noscroll);
    }

    return (
        <Container>
            <p>Nombre de morts mis à jour !</p>
            <button className={styles.button} onClick={handleClick}>Fermer</button>
        </Container>
    )
}

export default ConfirmUpdate;