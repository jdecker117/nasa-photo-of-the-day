import {BASE_URL, API_KEY} from './constants';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function Description(props){
    const {apod} = props;
    const [description, setDesc] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setDesc(res.data.explanation);
        }).catch(err => {
            console.log("Messed Up")
        })
      }, [])

    return(
        <div id='desc-container'>
            <div id='desc'>
                {description}
            </div>
        </div>
    )
}