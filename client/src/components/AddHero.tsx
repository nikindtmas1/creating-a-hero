import React, { FC, useState } from 'react';

type Props = {};

interface IState {
    hero: {
        name: string
        age: number
        height: string
        power: string
    }[]
}

const AddHero: FC = (props: Props) => {

    const [input, setInput] = useState({
        name: '',
        age: 0,
        height: '',
        power: ''
    });

    const [hero, setHero] = useState<IState["hero"]>([
        {
            name: '',
            age: 0,
            height: '',
            power: ''
        }
    ])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {

        setHero([
            ...hero,
            {
                name: input.name,
                age: input.age,
                height: input.height,
                power: input.power
            }])

    }

    return (

        <div>
            <div>
                <ul>
                    {hero.map(person =>

                        <>
                            <li className='List'>
                                <div className='List-header'>
                                    <h2>{person.name}</h2>
                                </div>
                                <p>{person.age} years old</p>
                                <p className='List-note'>Height: {person.height}</p>
                                <p className='List-note'>Power: {person.power}</p>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            <div className='AddHero'>
                <input
                    name='name'
                    type="text"
                    placeholder='Name'
                    className='AddHero-input'
                    onChange={handleChange}
                    value={input.name}
                />

                <input
                    name='age'
                    type="number"
                    placeholder='Age'
                    className='AddHero-input'
                    onChange={handleChange}
                    value={input.age}
                />

                <input
                    name='height'
                    type="text"
                    placeholder='Height'
                    className='AddHero-input'
                    onChange={handleChange}
                    value={input.height}
                />

                <input
                    name='power'
                    type="text"
                    placeholder='Super Power'
                    className='AddHero-input'
                    onChange={handleChange}
                    value={input.power}
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
