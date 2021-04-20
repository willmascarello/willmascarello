// Componens are reaproveitables in any parts of the App

import { useContext } from "react";
import { NameContext } from "../context/NameContext";

import styles from "../styles/components/Menu.module.css"

export function Menu() {
    const {isActive, functionActive} = useContext(NameContext); 

    return (
        <div className={styles.menu}>

        </div>
    )
}