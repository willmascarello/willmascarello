import styles from '../styles/pages/404.module.css'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <img src="workspace.jpg" alt="fundo página 404" />
    </div>
  )
}