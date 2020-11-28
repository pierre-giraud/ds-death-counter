import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from "react";
import MainComponent from "../components/MainComponent";
import {getPlayers, getBosses, resetDatabase} from "../utils/utils";
import AdminPanel from "../components/admin/AdminPanel";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {_battleStatus, _bosses, _players} from "./_app";
import ConfirmUpdate from "../components/ConfirmUpdate";

const Content = () => {
    const setPlayerList = useSetRecoilState(_players);
    const setBossList = useSetRecoilState(_bosses);
    const battleStatus = useRecoilValue(_battleStatus);

    // Récupération des données une fois la page chargée
    React.useEffect(() => {
        // Permet de reset la base de données
        // resetDatabase().then(r => console.log("Base de données réinitialisée"));

        /*getPlayers().then((players) => {
            if (players !== null && players.length > 0) setPlayerList(players);
        });

        getBosses().then((bosses) => {
            if (bosses !== null && bosses.length > 0) setBossList(bosses);
        });*/
    }, []);

    return (
        <>
            <AdminPanel />
            <MainComponent />
            {battleStatus &&
                <ConfirmUpdate />
            }
        </>
    )
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Compteur de morts - Dark Souls</title>
                <link rel="icon" href="ds-icon.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title1}>
                    Compteur de morts
                </h1>

                <h1 className={styles.title2}>
                    Dark Souls
                </h1>

                <Content/>
            </main>

            <footer className={styles.footer}>
                Développé par Pierre Giraud :)
            </footer>
        </div>
    )
}