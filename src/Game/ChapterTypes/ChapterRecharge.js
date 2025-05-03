import React, { useState, useEffect } from 'react';
import actionsData from '../Stories/LocalizationsEn';
import { RiWaterFlashFill } from "react-icons/ri";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

function ChapterRecharge({ currentChapter, character, setCharacter, goToChapter }) {
  const [recharged, setRecharged] = useState(false);

  const handleGoToNext = () => {
    goToChapter('next');
  };


  const rechargeHealth = () => {
    if (recharged === true)
       return;

    setCharacter(character.health + currentChapter.recharge);
    setRecharged(true);
  };

    // VALIDATE CHAPTER VIEW
    if(!currentChapter.recharge) {
        return <p>Error: The component requires recharge object.</p>
    }
    

  return <span>
          <p>{currentChapter.text}</p>
          { recharged && <p>{actionsData.yourHealthIncreased.replaceAll("##health##" , currentChapter.recharge)}</p> }
          <p>
            <ul>
              <li><span><a href="#" onClick={rechargeHealth}>{actionsData.recover}</a> <RiWaterFlashFill color="green" /></span></li>
              <li><a href="#" onClick={handleGoToNext}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li>
            </ul>
          </p>
        </span>;
}

export default ChapterRecharge;