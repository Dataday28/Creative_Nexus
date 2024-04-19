import useStateSpoty from "../../state/stateSpoty";
import styles from "./styles.module.css"

const SpotIcon = () => {
    const {dataSpoty, fetchSpoty} = useStateSpoty();
    const playlist = dataSpoty.uri || [];
    
    const handleClick = () => {
        fetchSpoty();
    }

    return(
        <>
            <button onClick={handleClick} className={styles.btnSpoti}> <a href={playlist} className={styles.btnplay}>▶</a></button>
            
        </>
    )

}

export default SpotIcon;