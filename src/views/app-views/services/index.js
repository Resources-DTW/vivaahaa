import React from 'react';
import { useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';

const ServicesType = (props) => {
    const theme = useSelector((state) => state.theme.currentTheme);
    const { type } = useParams();
    return (
        <div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
            <h1 className=''>
                service of {type} available
            </h1>
        </div>
    );
};

export default ServicesType;
