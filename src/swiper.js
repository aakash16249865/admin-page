import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img from './images/ticket img.png'
export default function Content()
{
    return(
        <div className='contianer bg-primary'>
            <img src={img} width={100} height={60}></img>
        </div>
    )
}