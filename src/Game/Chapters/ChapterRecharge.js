import React, { useState } from 'react';
import actionsData from '../ActionsData';
import { RiWaterFlashFill } from "react-icons/ri";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

function ChapterRecharge({ currentChapter, character, setCharacter, goToChapter }) {
  const [recharged, setRecharged] = useState(false);

  const rechargeHealth = () => {
    if (recharged === true)
       return;

    setCharacter({ health: character.health + currentChapter.recharge });
    setRecharged(true);
  };

  const buildChapterText = () => {
    
    if (recharged)
        return <span>
                  <p>{currentChapter.text}</p>
                  <p>{actionsData.yourHealthIncreased.replaceAll("##health##" , currentChapter.recharge)}</p>
              </span>

    return <p>{currentChapter.text}</p>
  };

  const buildOptions = () => {

    const rechargeOption = currentChapter.recharge ? <li><span><a  href="#" onClick={() => rechargeHealth()}>{actionsData.recover}</a> <RiWaterFlashFill color="green" /></span></li> : "";
    const goToNext = <li><a href="#" onClick={() => goToChapter("next")}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li>;
    return <p>
            <ul>
            {rechargeOption}
            {goToNext}
            </ul>
          </p>;
  }

  return <span>
            {buildChapterText()}
            {buildOptions()}
            </span>;
}

export default ChapterRecharge;