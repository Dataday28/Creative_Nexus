import SpotIcon from '../SpotIcon';
import styles from './styles.module.css'

const Footer = () => {


    return (
        <div>
            <footer className={styles.footer}>
                <p >Don't forget that we've selected some music for you to enjoy during your tour.</p>
                <SpotIcon />
                <p className={styles.parr}>© 2024 Creative Nexus. All rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer;