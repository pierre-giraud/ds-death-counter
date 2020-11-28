import React, {useState} from "react";
import styled from "styled-components";
import AdminCardTitle from "./AdminCardTitle";
import AdminCardBody from "./AdminCardBody";
import AdminCardStatus from "./AdminCardStatus";
import {useSetRecoilState} from "recoil";
import {_bosses, _players} from "../../pages/_app";
import {absoluteUrl, getEntities, getEntity, getPlayers, insertEntity} from "../../utils/utils";
import styles from "../../styles/Home.module.css";

const Container = styled.div`
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

function AdminCard({title, type}){
    const setPlayerList = useSetRecoilState(_players);
    const setBossList = useSetRecoilState(_bosses);

    const [entityName, setEntityName] = useState(""); // Nom de l'entité à ajouter
    const [status, setStatus] = useState(-1);         // Status de l'insertion

    const character = type === 0 ? "player" : "boss";

    async function handleClick (){
        // Si le nom est vide
        if (entityName === ""){
            setStatus(1);
        } else { // Sinon on vérifie que le nom est valide
            // Récupération du nombre d'instances de joueurs
           /* let players = await getPlayers();

            // Limite du nombre de joueurs à 4
            if (players.length < 4){
                // Récupération de l'URL
                const { origin } = absoluteUrl();
                const baseApiUrl = `${origin}/api`;

                // Récupération de l'entité correspondant
                const entAPI = await fetch(`${baseApiUrl}/${character}/${entityName}`);
                const ent = await entAPI.json();

                // Si le tableau est vide, alors le joueur n'existe pas : on peut l'ajouter
                if (ent.length === 0) {
                    // Création des options de la requête POST
                    const options = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: entityName })
                    };

                    // Insertion d'une nouvelle entrée
                    await fetch(`${baseApiUrl}/${character}`, options);

                    // Récupération des entités pour MAJ de l'interface
                    const entitiesAPI = await fetch(`${baseApiUrl}/${character}`);
                    const entities = await entitiesAPI.json();

                    // Mise à jour de l'état
                    type === 0 ? setPlayerList(entities) : setBossList(entities);
                    setStatus(0);
                } else {
                    setStatus(2);
                }
            } else {
                setStatus(3);
            }*/

           getPlayers().then((players) => {
               if (players !== null && players.length < 4){
                    getEntity(character, entityName).then((entity) => {
                        if (entity !== null && entity.length === 0 ) {
                            insertEntity(character, entityName).then(() => {
                                getEntities(character).then((entities) => {
                                    type === 0 ? setPlayerList(entities) : setBossList(entities);
                                    setStatus(0);
                                })
                            })
                        } else {
                            setStatus(2);
                        }
                    })
               } else {
                   setStatus(3);
               }
           })
        }
    }

    function handleChange({target: {value}}){
        if (value.length > 0) setEntityName(value);
    }

    return (
        <Container>
            <AdminCardTitle>{title}</AdminCardTitle>
            <AdminCardBody>
                <input placeholder={type === 0 ? "Pseudo" : "Nom du boss"} onChange={(handleChange)}/>
                <button className={styles.button} onClick={handleClick}>Ajouter</button>
            </AdminCardBody>
            {status === 0 &&
                <AdminCardStatus color={"green"}>
                    {type === 0 ? "Joueur" : "Boss"} ajouté
                </AdminCardStatus>}
            {status === 1 &&
                <AdminCardStatus color={"red"}>
                    Veuillez entrer une valeur
                </AdminCardStatus>}
            {status === 2 &&
                <AdminCardStatus color={"red"}>
                    Ce {type === 0 ? "joueur" : "boss"} existe déjà
                </AdminCardStatus>}
            {status === 3 &&
                <AdminCardStatus color={"red"}>
                    Nombre limite de joueurs atteint
                </AdminCardStatus>}
        </Container>
    )
}

export default AdminCard;