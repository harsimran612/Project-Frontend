import React from"react";
import { useState } from 'react'
import StoryList from '../StoryList/StoryList.js'
import StoryForm from '../StoryForm/StoryForm.js'
import styles from './styles'

const Home = ()  => {

    const [apiSuccess, setApiSuccess] = useState(false)

    return(
        <div style={{marginTop:"15px"}}>
            <div style={styles.firstDiv}>
                <StoryForm setApiSuccess={ setApiSuccess } />
            </div>

            <div style={styles.content}>
                <StoryList apiSuccess={apiSuccess}/>
            </div>
        </div>
    )
}

export default Home; 