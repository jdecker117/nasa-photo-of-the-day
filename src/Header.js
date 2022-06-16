import React, {useState, useEffect} from 'react';
import {BASE_URL, API_KEY} from './constants';
import axios from 'axios';
import './styles/Header.css'

export default function Header(props) {
    const {apod} = props;
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setDate(res.data.date);
        }).catch(err => {
          console.log("Messed Up")
        })
      }, [])

      useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setTitle(res.data.title);
        }).catch(err => {
            console.log("Messed Up")
        })
      }, [])

    return (
        <div className='header container'>
            <div id='nasa-logo-container'>
                <img
                alt='nasa-logo'
                id='nasa-logo'
                src= "https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg"
                />  
            </div>
            <h1 id='title'>{title}</h1>
            <div id='date'>{date}</div>
        </div>
    )
}