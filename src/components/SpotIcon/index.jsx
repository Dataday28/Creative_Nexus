import { useEffect } from "react";
import useStateSpoty from "../../state/stateSpoty";
import styles from "./styles.module.css"

const SpotIcon = () => {
    const {dataSpoty, fetchSpoty} = useStateSpoty();
    const playlist = dataSpoty.uri || [];
    
    useEffect(() => {
        fetchSpoty();
    }, [])

    return(
        <>
            <a href={playlist} className={styles.btnSpoti}>▶</a>
        </>
    )

}

export default SpotIcon;