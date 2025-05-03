import React from 'react';
import { FaHeart } from 'react-icons/fa';
import actionsData from './Stories/LocalizationsEn';

function Character( {character }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <span><FaHeart color="red" /> {actionsData.health}: {character.health} </span>
            </div>
            </nav>
        </div>
      );
}

export default Character;