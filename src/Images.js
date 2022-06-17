import React, {useState, useEffect} from 'react';
import Image from "./Image";
import Description from "./Description";
import './styles/Images.css'
import theme from './theme'
import styled, { keyframes } from 'styled-components'


const StyledImages = styled.div`
    .space {
        height: 80vh;
        display: flex;
        justify-content: space-between;
    }
    
    #desc{
        font-size: 20px;
        color: ${theme.tertiaryColor};
        width: 90%;
        text-align: center;
    }
    
    .space-desc{
        width:50%;
        display: flex;
        align-items: center;
        background-color: ${theme.primaryColor};
        height: 100%;
    }
    
    #photo{
        max-width:100%;
        max-height: 100%;
        display: block;
    }
    
    .space-pic{
        width:50%;
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: ${theme.primaryColor};
    
    }`

export default function Images(props){
    const {apod} = props;

    return(
        <StyledImages>
        <div className='space container'>
            <div className='space-pic'><Image apod={apod}/></div>
            <div className='space-desc'><Description apod={apod}/></div>
        </div>
        </StyledImages>
    )
}