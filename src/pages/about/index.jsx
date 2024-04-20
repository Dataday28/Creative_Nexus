import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import styles from "./styles.module.css"

const About = () => {

    return (
    
        <div>
            <NavBar />

            <div>
                <h1 className={styles.title}>About</h1>
            </div>

            <div className={styles.content}>
                <p className={styles.parr}>This page was created with the intention of promoting art, artists, and their history</p>
                <p  className={styles.parr}>All information was provided by the API of the Art Institute of Chicago</p>
                <p  className={styles.parr}>And Spotify of Rapid.</p>
                <a className={styles.btnApi} href="https://api.artic.edu/docs/" target="_blank">Art Intitute of Chicago API</a>
                <a className={styles.btnSpot} href="https://rapidapi.com/Glavier/api/spotify23" target="_blank">Spotify</a>
                <a className={styles.btnWeb} href="https://www.artic.edu/" target="_blank">Art Intitute of Chicago</a>
            </div>
            
            <Footer />

        </div>

    )
}

export default About;