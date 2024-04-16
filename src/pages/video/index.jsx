import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import styles from "./styles.module.css"

const Video = () => {
    
    
    return (
        <div>
            <NavBar />

            <div>
                <h1 className={styles.title}>Videos</h1>
            </div>

            <div className={styles.infoContainer}>
                <p className={styles.info}>Here you can see some of the art exhibitions that have taken place</p>
            </div>

            <div className={styles.videosContainer}>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/1A7TiOJS54Y?si=LtR9J69xsphMRWIP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/d-tPVhyTvzI?si=uuVv8JVRG7f-9Obl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/hOtTPmPqRZQ?si=sKMAC8SwhkmgU9r_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/AtO699gsFS8?si=IeORhPd5PlJwyv8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/CbjObs3s8Lk?si=wslrKCJaXHzAiMbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/BNuL0epu3Jk?si=l2wlTdVUF_Oiz_dO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/XM9NdEhBbrQ?si=ulj5gT1qZebFQbP2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/DaZjXZhg_OA?si=saEVTvacHQKBV2h6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            

            <Footer />
        </div>
    )
}

export default Video;