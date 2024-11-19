import React from 'react';
import { useSelector } from 'react-redux';

const MatchMaking = (props) => {
    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
            <h1 className=''>
                Match Making Pages
            </h1>
        </div>
    );
};

export default MatchMaking;
