import {  useState } from "react";
import useStateSpoty from "../../state/stateSpoty";
import styles from "./styles.module.css"

const SpotIcon = () => {
    const [ activo, setActivo ] = useState(false);
    const {dataSpoty, fetchSpoty} = useStateSpoty();
    const playlist = dataSpoty.uri || [];

    const handleClick = (e) => {
        e.preventDefault();
        fetchSpoty()

        if(activo === false) {
            setActivo(true)
        } else {
            setActivo(false)
        }
        
    }
    

    return(
        <div>
            <div>
                <button onClick={handleClick}>See the playlist</button>
            </div>
            <div className={styles.cont}>
                {activo && (<a href={dataSpoty.uri ? dataSpoty.uri : 'https://open.spotify.com/playlist/70GOtPdEBvGeg90cBJc6QO'} target="_blank" onClick={() => setActivo(false)} className={styles.btnplay}>▶</a>)}
            </div>
            
        </div>
    )

}

export default SpotIcon;