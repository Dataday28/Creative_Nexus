import styles from './styles.module.css'

const NavBar = () => {


    return (
        <div className={styles.header}>
                <h1 className={styles.headerTitle}>Galería de Arte</h1>
                <nav>
                    <ul className={styles.barra}>
                        <li className={styles.lista}><a className={styles.contenido} href="/">Inicio</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href='/gallery'>Galeria</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href="/video">Videos</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href="/subscribe">Suscribete</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href="/about">Acerca de</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBar;