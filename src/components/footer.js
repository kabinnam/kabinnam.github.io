import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)

export default Footer