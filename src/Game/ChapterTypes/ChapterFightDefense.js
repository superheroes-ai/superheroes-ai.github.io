import React, { useState } from 'react';
import gameData from '../Stories/Game';
import actionsData from '../Stories/LocalizationsEn';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";

function ChapterFightDefense({ currentChapter, character, setCharacter, goToChapter}) {
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
    const [subOptionDefenseVisibility, setSubOptionDefenseVisibility] = useState(false);
    const [actionExecuted, setActionExecuted] = useState(null);
    const [runAwayExecuted, setRunAwayExecuted] = useState(null);

    const isAlive = character.health > 0;
    const inFightWithRound = currentChapter.fight && currentChapter.fight.rounds[currentRoundIndex];
    
    const handleGoToNext = () => {
      goToChapter('next');
    };
  
    const handleStartOver = () => {
      goToChapter('start');
    };

    const handleAction = (action) => {
        setRunAwayExecuted(null);
        setSubOptionDefenseVisibility(false);
        setActionExecuted({ action: action });
    
        if (action.success === false) {
            setCharacter(currentChapter.fight.opponentAttackPower * -1);
        }
    
        setCurrentRoundIndex(currentRoundIndex + 1);
    };

    const handleRunAwayAction = (action) => {
      setRunAwayExecuted({ action: action });
    };

    const buildOptions = () => {
        const defenseIcon = <IoShieldHalfSharp color='green' />;

        const runAwayAction = currentChapter.fight.runAwaySuccess ||  currentChapter.fight.runAwayFail;
        const optionRunAway =  runAwayAction ||  currentChapter.fight.runAwayFail ?
                                <li><a href="#" onClick={() => handleRunAwayAction(runAwayAction)}>{actionsData.tryToRunAway}</a> <FaRunning /></li> : "";

        const subOptionsDefense = subOptionDefenseVisibility ? 
                  <ul>
                  {inFightWithRound.options.map((defense) => (
                    <li><a href="#" onClick={() => handleAction(defense)}>{defense.name}</a> <FaArrowRightLong /> {defense.action}</li>
                  ))}
                    </ul> : "";

        const optionDefense = (<li><a href="#" onClick={() => setSubOptionDefenseVisibility(true)}>{actionsData.seeYourOptions.replaceAll("##type##", currentChapter.fight.type)}</a>{defenseIcon} {subOptionsDefense}</li>);
        return <p>{optionDefense}{optionRunAway}</p>;
    };

    // VALIDATE CHAPTER VIEW
    const canChapterBeLoaded = currentChapter.fightDefense;
    if(!canChapterBeLoaded) {
      return <p>Error: The component requires fight defense object.</p>
    }

    // CHAPTER FIGHT DEATH COMPONENT
    if (!isAlive) {
      return <span>
          <p>{actionExecuted.action.outcome}</p>
          <p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>
          <p>{gameData.mainCharacterDeathScene}</p>
          <p><ul><li><a href="#" onClick={handleStartOver}>{actionsData.startOver}</a> <LuRepeat2 /> </li></ul></p>;
      </span>
    }

    // RUN AWAY OPTION VIEW
    if (runAwayExecuted) {
      if(runAwayExecuted.action === currentChapter.fight.runAwaySuccess) {
          return <span>
              <p>{currentChapter.fight.runAwaySuccess}</p>
              <p><ul><li><a href="#" onClick={handleGoToNext}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li></ul></p>;
          </span>
      } 
      
      return <span>
              <p>{currentChapter.fight.runAwayFail}</p>
              <p>{inFightWithRound.opponentAttack}</p>
              {buildOptions()}
            </span>
    }

    // CHAPTER FIGHT DEFENSE COMPONENT
    if (actionExecuted) {
      const hasMoreRounds = currentChapter.fight.rounds[currentRoundIndex]
      if(!hasMoreRounds) {
        return <span>
                <p>{actionExecuted.action.outcome}</p>
                {actionExecuted.action.success === false && (<p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>)}
                <p>{currentChapter.fight.mainCharacterEscapeText}</p>
                <p><ul><li><a href="#" onClick={handleGoToNext}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li></ul></p>
            </span>
      }

      return <span>
                <p>{actionExecuted.action.outcome}</p>
                {actionExecuted.action.success === false && (<p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>)}
                <p>{inFightWithRound.opponentAttack}</p>
                {buildOptions()}
            </span>
    }

    return <span>
              <p>{currentChapter.text}</p>
              <p>{inFightWithRound.opponentAttack}</p>
              {buildOptions()}
          </span>
  }

export default ChapterFightDefense;