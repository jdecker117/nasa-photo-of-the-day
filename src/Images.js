import React, {useState, useEffect} from 'react';
import Image from "./Image";
import Description from "./Description";
import './styles/Images.css'

export default function Images(props){
    const {apod} = props;

    return(
        <div className='space container'>
            <div className='space-pic'><Image apod={apod}/></div>
            <div className='space-desc'><Description apod={apod}/></div>
        </div>
    )
}