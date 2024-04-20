import { Link } from "react-router-dom";
import styles from "./styles.module.css"

const EventItem = ({ id, img, title, subtitle}) => {

    return (
        <div className={styles.flex_container}>
            <div className={styles.containerImages}>
                <Link to={`/detail/${id}`} target="_blank"><img className={styles.flex_item} src={img} alt={title} /></Link>
            </div>
            <div className={styles.containerText}>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.subtitle}>{subtitle}</h4>
            </div>
        </div>
    )
}

export default EventItem;