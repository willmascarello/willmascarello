import { useContext } from "react";
import { NameContext } from "../context/NameContext";
// import VideoBackground from "video/Mountains.mp4"

import styles from "../styles/pages/Home.module.css"

export function HomePage() {
    const {isActive, functionActive} = useContext(NameContext); 

    return (
        <div className={styles.container}>
            {/* https://www.youtube.com/watch?v=PYFltdGJ-Rc 
            https://www.youtube.com/watch?v=I2UBjN5ER4s*/}
            <video autoPlay loop muted className={styles.videoBackground}>
                <source src="video/Mountains.mp4" type="video/mp4" />
            </video>
            <div className={styles.title}>
                <h2>Olá,</h2>
                <h1>Sou o William Mascarello</h1>
            </div>
            <h2 className={styles.subtitle}>Bem-vindo ao <br/>Meu Universo <br/>em constante evolução</h2>
        </div>
    )
}