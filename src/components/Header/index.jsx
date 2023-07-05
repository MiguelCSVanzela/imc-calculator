
import styles from "./Header.module.css";
// eslint-disable-next-line react/prop-types
const Header = ({ nome }) => {
    return (
        <header className={styles.header} >
            <div className="container">
                <h1 className={styles.name}>{nome}</h1>
            </div>
        </header>
    )
}

export default Header