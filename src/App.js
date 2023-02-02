import React from 'react'
import Logo from './images/logoimg.png'
import Home from './components/Home/Home.js'
import styles from './styles'

const App = props => {

    return (
        <div style={styles.homeDiv}>
            <header style={styles.header}>
            {/* attribution for the image used. */}
            {/* <a href='https://pngtree.com/so/travel'>travel png from pngtree.com/</a> */}
                <img src={Logo} style={styles.image} />
                &nbsp;
                <p style={styles.title}><b>ShareurTrip</b></p>
            </header>

            <Home />
            <footer style={styles.footer}> 2021 ShareurTrip </footer>
        </div>
    )
}

export default App