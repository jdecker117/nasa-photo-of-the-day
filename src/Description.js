import {BASE_URL, API_KEY} from './constants';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import theme from './theme'
// import styled, { keyframes } from 'styled-components'

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

    //   const StyledImages = styled.div`
    // background-color: ${theme.primaryColor}
    // color: ${theme.tertiaryColor}`

    return(
        // <StyledImages>
            <p id='desc'>
                {description}
            </p>
        // </StyledImages>
    )
}