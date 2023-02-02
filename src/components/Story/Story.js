import React from 'react'
import styles from './styles'

const Story = ({story}) => {

    return (
        <div style={styles.actions}>
            <div>
                <h1>
                    {story.caption}
                </h1>
                <div>
                    <img src={story.image?.image}  style={styles.imgStyle}/>
                </div>
                
                <p> Posted by: {story.username} </p>
                <p> Tags: {story.tags} </p>
                <p> Posted on: {story.postDate} </p>
            </div>
        </div>
    )
}

export default Story;
