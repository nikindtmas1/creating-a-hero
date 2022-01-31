import React, { FC, useState } from 'react';

type Props = {};



const AddHero: FC = (props: Props) => {

    const [name, setName] = useState('Niki');

    const handleClick = () => {

        setName('Jon')
    }

    return (

        <div>
            <div>{name}</div>

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

            <button 
            type='button'
            onClick={handleClick}
            >
                Change Name
            </button>
            </div>
        </div>

    );
};

export default AddHero;
