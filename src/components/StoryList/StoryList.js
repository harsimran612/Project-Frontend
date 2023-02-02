import React from 'react'
import { useState, useEffect } from 'react'
import Story from '../Story/Story.js'
import styles from './styles'
import axios from 'axios'

const StoryList = ({apiSuccess}) => {

    const [stories, setStories] = useState([])

    useEffect(() => { 
        
        axios.get('http://localhost:8080/home/')
        .then((res) => {
            
            setStories(res.data)
            console.log(res)
        })
        .catch(error => console.log(error))
    
    }, [apiSuccess])

    return (
        <div style={styles.flexDiv}>
            
            {stories.map(story => {
                return <Story key={story._id} story={story} />
            })}
    
        
        </div>
    )
}

export default StoryList
