import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

import Container from "./Container"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Custos" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Empresa">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Produtos">Produtos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar