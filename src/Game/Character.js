import React from 'react';
import { FaHeart } from 'react-icons/fa';
import actionsData from './ActionsData';

function Character(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <span><FaHeart color="red" /> {actionsData.health}: {props.character.health} </span>
            </div>
            </nav>
        </div>
      );
}

export default Character;