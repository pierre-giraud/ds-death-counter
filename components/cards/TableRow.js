import React, {useEffect, useState, useContext} from "react";
import styles from "../../styles/Home.module.css";
import {absoluteUrl} from "../../utils/utils";
import {playerContext} from "../MainComponent";
import {useSetRecoilState} from "recoil";
import {_battleStatus} from "../../pages/_app";
import {getBattle} from "../../utils/utils";

function TableRow({boss}){
    const [deaths, setDeaths] = useState(0);
    const playerId = useContext(playerContext).id;
    const bossId = boss.id;
    const setBattleStatus = useSetRecoilState(_battleStatus);

    useEffect(() => {
        let battle;

        async function fetchDeaths(){
            battle = await getBattle(playerId, bossId);
        }

        // Récupération du combat
        fetchDeaths().then(() => setDeaths(battle.deaths));
    }, []);

    async function handleClick() {
        // Récupération de l'URL
        const { origin } = absoluteUrl();
        const baseApiUrl = `${origin}/api`;

        // Création des options de la requête POST
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playerId: playerId, bossId: bossId, deaths: deaths })
        };

        // Insertion d'une nouvelle entrée
        await fetch(`${baseApiUrl}/battle`, options).then(() => {
            setBattleStatus(true);
            document.body.classList.add(styles.noscroll);
        });
    }

    return(
        <tr>
            <td>{boss.name}</td>
            <td>
                <div>
                    <input type="number"
                           value={deaths}
                           onChange={({target: {value}}) => setDeaths(Number(value))}/>
                    <button className={styles.button} onClick={handleClick}>OK</button>
                </div>
            </td>
        </tr>
    )
}

export default TableRow;