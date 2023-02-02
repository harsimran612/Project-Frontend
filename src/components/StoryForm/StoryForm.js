import React from 'react'
import { useState } from 'react'
import styles from './styles'
import axios from 'axios'

import Filebase64 from 'react-file-base64'

const StoryForm=({setApiSuccess})=>{

    

    const[caption,setCaption]= useState('');

    const[username,setUsername]= useState('');

    // const[userId,setUserId]= useState('');

    const[image,setImage]= useState('');

    const[tags,setTags]= useState('');

    const onCaptionChange=(event)=>{
      setCaption(event.target.value);
   };

    const onUsernameChange=(event)=>{
      setUsername(event.target.value);
   };

    // const onUserIdChange=(event)=>{
    //     setUserId(event.target.value);
    // };

    // const onImageChange=(event)=>{
    //     setImage(event.target.value);
    //     console.log(event.target.file, "$$$")
    // };

    const ontagsChange=(event)=>{
        setTags(event.target.value);
    };

    const onSubmitButton = (event) => {
        event.preventDefault();

        setApiSuccess(false)

        const story = {
            caption,
            username,
            image,
            tags
        }

        axios
        .post('http://localhost:8080/home/', story)
        .then((res) => {
            setApiSuccess(true)
            console.log(res.data)
        })
        .catch(error => console.log(error))

    }

  

    return (
    <div>

        <form style={ styles.form }>
        
        <div style={styles.secondDiv}>
            
            <h2 style= {styles.h2}>Share a memory of your Trip here</h2>

            <label>
                Name: 
                <input 
                style={styles.inputStyle}
                type="text"
                value= {username}
                onChange = {onUsernameChange}
                placeholder="Name"
                />
            </label>

            <br></br>

            <label>
                Caption: 
                <textarea
                style={styles.txtAreaStyle}
                value={caption}
                onChange = {onCaptionChange}
                placeholder="Caption"
            />
            </label>

            <br></br>

            <label>
                Tags: 
                <input
                style={{
                    padding: "5px",
                    margin: "5px 5px 5px 40px",
                    width: "20em",
                    minHeight: "3em",
                }}
                type="text"
                value= {tags}
                onChange = {ontagsChange}
                placeholder="Tags"
                />
                </label>
                
            <br></br>

            <label>
                Image: 
                <Filebase64 
                    type="file"
                    name="image"
                    id="image"
                    value={image}
                    multiple = {false}
                    // onChange={(event) => handleImageUpload(event)}
                    onDone={({ base64 }) => setImage({ 
                        ...image, image: base64
                     }) } 
                />
            </label>    

            <br></br>

        <button onClick={onSubmitButton} style={styles.btn}>Submit</button>

        </div>

        </form>
    </div>
    
)}

export default StoryForm;
