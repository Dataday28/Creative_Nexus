import styles from './styles.module.css'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => {
    return(
        <div>
            <NavBar />
            <div className={styles.hero}>
                <h2 className={styles.title}>Bienvenidos a nuestra galería</h2>
                <p className={styles.parrafo}>Explora obras de arte únicas y descubre nuevas perspectivas.</p>
                <a href="#" className={styles.btn}>Ver exposiciones</a>
            </div>
            <Footer />
        </div>
    )
}

export default Home;