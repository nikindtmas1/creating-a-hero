import React, { FC } from 'react';

type Props = {};

const AddHero: FC = (props: Props) => {
    return (
        <div className='AddHero'>
            <input 
            type="text" 
            placeholder='Name'
            className='AddHero-input'
            />
    
            <input 
            type="number" 
            placeholder='Age'
            className='AddHero-input'
            />
            
            <input 
            type="text"
            placeholder='Height'
            className='AddHero-input'
            />
            
            <input 
            type="text"
            placeholder='Super Power'
            className='AddHero-input'
            />
        </div>
    );
};

export default AddHero;
