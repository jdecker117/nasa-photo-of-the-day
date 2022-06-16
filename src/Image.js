import {BASE_URL, API_KEY} from './constants';
import axios from 'axios';
import React, {useState, useEffect} from 'react';


export default function Image(props){
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setImage(res.data.hdurl);
        }).catch(err => {
            console.log("Messed Up")
        })
      }, [])

    return (
        <div id="image-container">
            <img
            alt= 'photo-of-the-day'
            id='photo'
            src={image}
            />
            
        </div>
    )
}
