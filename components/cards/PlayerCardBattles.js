import React from "react";
import styles from '../../styles/Home.module.css'
import {useRecoilValue} from "recoil";
import {_bosses} from "../../pages/_app";
import TableRow from "./TableRow";

function PlayerCardBattles(){
    const bosses = useRecoilValue(_bosses);
    const bossesOK = Object.entries(bosses).length !== 0;

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Boss</th>
                        <th>Morts</th>
                    </tr>
                </thead>

                <tbody>
                    {bossesOK && bosses.map(boss => {
                            return (
                                <TableRow key={boss.id} boss={boss}/>
                            )
                        })
                    }
                </tbody>
            </table>
            {!bossesOK && <p className={styles.centered}>Aucun boss encore rencontré</p>}
        </>
    )
}

export default PlayerCardBattles;