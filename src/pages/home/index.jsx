import styles from './styles.module.css'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => {
    

    return(
        <div>
            <NavBar />
            <div className={styles.hero}>
                <h2 className={styles.title}>Welcome !</h2>
                <p className={styles.parrafo}>Explore unique works of art and discover new perspectives.</p>
                <a href='/Gallery' className={styles.btn}>See the Gallery</a>
            </div>
            <Footer />
        </div>
    )
}

export default Home;