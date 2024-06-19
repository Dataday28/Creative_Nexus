import styles from './styles.module.css'

const NavBar = () => {


    return (
        <div className={styles.header}>
                <h1 className={styles.headerTitle}>Creative Nexus</h1>
                
                <nav className={styles.nav}>
                    <ul className={styles.barra}>
                        
                        <li className={styles.lista}><a className={styles.contenido} href="/">Home</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href='/gallery'>Gallery</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href="/video">Videos</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href="/subscribe">Subscribe</a></li>
                        <li className={styles.lista}><a className={styles.contenido} href="/about">About</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavBar;