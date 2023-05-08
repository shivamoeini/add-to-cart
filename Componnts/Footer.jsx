
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <>
    <footer className={styles.footer}>
Copyright <span className={styles.brand}>GamesKart</span>{' '}
      {new Date().getFullYear()}

    </footer>
    </>
  )
}

export default Footer