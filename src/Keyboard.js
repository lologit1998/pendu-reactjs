import React, { Component } from 'react'

import './Keyboard.css'


const Keyboard = ({entries}) => (
    <div className="keyboard">
        {entries.map((letter) => (
            <button className={letter}>{letter}</button>
        ))}
    </div>
)


        


export default Keyboard