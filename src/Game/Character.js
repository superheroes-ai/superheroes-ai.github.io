import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Character(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <span><FaHeart color="red" /> Health: {props.character.health} </span>
            </div>
            </nav>
        </div>
      );
}

export default Character;