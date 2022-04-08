import Nav from './Nav'
import styles from '../styles/Layout.module.css'

function Layout({children}) {
  return (
    <>
        <Nav/>
        <div className={`${styles.container} ${styles.main}`}>
            {children}
        </div>
    </>

  )
}

export default Layout