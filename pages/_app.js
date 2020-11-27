import '../styles/globals.css';
import React from "react";
import {atom, RecoilRoot} from "recoil";

export const _players = atom({key: 'players', default: []});
export const _bosses = atom({key: 'bosses', default: []});
export const _battleStatus = atom({key: 'battleStatus', default: false});

function MyApp({ Component, pageProps }) {
  return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
  )
}

export default MyApp
