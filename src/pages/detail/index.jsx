import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import NavBar from "../../components/Navbar"
import { useEffect, useState } from "react";
import styles from "./styles.module.css"

const Detail = () => {
    const { eventId } = useParams();
    const [ artData, setArtData ] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchArtData = async () => {
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks/${eventId}`)
                const data = await response.json();
    
                setArtData(data.data)
                setIsLoading(false);
            } catch(error) {
                setArtData({})
            }
        }

        fetchArtData();
    }, []) 

    if (isLoading && Object.keys(artData) === 0) {
        return <div>Cargando evento...</div>
    };

    console.log(artData);

    return (
        <div>
            <NavBar />

            <div className={styles.img_container}>
                <img src={`https://www.artic.edu/iiif/2/${artData.image_id}/full/843,/0/default.jpg`} />
                
                <div className={styles.artDetails}>
                    <h1 className={styles.artistTitle}>{artData.artist_display}</h1>
                    <dl className={styles.artInfo}>
                        <dt className={styles.artdt}><h3>Place</h3></dt>
                        <dd className={styles.artdd}><p>{artData.place_of_origin}</p></dd>
                        <dt className={styles.artdt}><h3>Date</h3></dt>
                        <dd className={styles.artdd}><p>{artData.date_display}</p></dd>
                        <dt className={styles.artdt}><h3>Medium</h3></dt>
                        <dd className={styles.artdd}><p>{artData.medium_display}</p></dd>
                        <dt className={styles.artdt}><h3>Dimensions</h3></dt>
                        <dd className={styles.artdd}><p>{artData.dimensions}</p></dd>
                        <dt className={styles.artdt}><h3>Credit Line</h3></dt>
                        <dd className={styles.artdd}><p>{artData.credit_line}</p></dd>
                        <dt className={styles.artdt}><h3>Reference Number</h3></dt>
                        <dd className={styles.artdd}><p>{artData.main_reference_number}</p></dd>
                    </dl>
                </div>
                
            </div>
            <div className={styles.detail_container}>
                <h1 className={styles.arttTitle} >{artData.title}</h1>
                <p className={styles.artDesc}>{artData.description}</p>
            </div>
            
            <Footer />
        </div>
    )
}

export default Detail;