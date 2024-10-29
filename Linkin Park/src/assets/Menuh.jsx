import styles from './MenuH.module.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './fotos/png-transparent-printed-t-shirt-linkin-park-hoodie-sleeve-t-shirt-angle-text-trademark-thumbnail-removebg-preview.png'
export function Menuh() {
    return(
        <div className={styles.menu2}>
            <a href="#">Likin Park</a>
            <img src={logo} alt="Logo" />
        </div>
    );
}