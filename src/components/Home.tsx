// Componens are reaproveitables in any parts of the App

import { useContext } from "react";
import { NameContext } from "../context/NameContext";

import styles from "../styles/components/Home.module.css"

export function Home() {
    const {isActive, functionActive} = useContext(NameContext); 

    return (
        <div className={styles.container}>
            <h2>Olá,</h2>
            <h1>Sou o William Mascarello</h1>
            <h2>Bem vindo ao Meu Universo em constante evolução</h2>
        </div>
    )
}