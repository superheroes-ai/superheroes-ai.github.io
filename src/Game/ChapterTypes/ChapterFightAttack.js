import React, { useState } from 'react';
import gameData from '../Stories/Game';
import actionsData from '../Stories/LocalizationsEn';
import { BsFillLightningFill  } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";

function ChapterFightAttack({ currentChapter, character, setCharacter, goToChapter}) {
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
    const [subOptionAttackVisibility, setSubOptionAttackVisibility] = useState(false);
    const [attackExecuted, setAttackExecuted] = useState(null);
    const [runAwayExecuted, setRunAwayExecuted] = useState(null);

    const isAlive = character.health > 0;
    const inFightWithRound = currentChapter.fight && currentChapter.fight.rounds[currentRoundIndex];
    
    const handleGoToNext = () => {
      goToChapter('next');
    };
  
    const handleStartOver = () => {
      goToChapter('start');
    };

    const handleAttackAction = (action) => {
        setRunAwayExecuted(null);
        setSubOptionAttackVisibility(false);
        setAttackExecuted({ action: action });
    
        if (action.success === false) {
          setCharacter(currentChapter.fight.opponentAttackPower * -1);
        }
    
        if (action.success === true) 
        {
          setCurrentRoundIndex(currentRoundIndex + 1);
        }
    };

    const handleRunAwayAction = (action) => {
      setRunAwayExecuted({ action: action });
    };
      

    const buildOptions = () => {
        const attackIcon = <BsFillLightningFill  color="blue"/>;
        
        const runAwayAction = currentChapter.fight.runAwaySuccess ||  currentChapter.fight.runAwayFail;
        const runAwayOption =  runAwayAction ||  currentChapter.fight.runAwayFail ?
                                <li><a href="#" onClick={() => handleRunAwayAction(runAwayAction)}>{actionsData.tryToRunAway}</a> <FaRunning /></li> : "";

        const subAttackOptions = subOptionAttackVisibility ? 
                            <ul>
                          {inFightWithRound.options.map((attack) => (
                            <li><a href="#" onClick={() => handleAttackAction(attack)}>{attack.name}</a> <FaArrowRightLong /> {attack.action}</li>
                          ))}
                            </ul> : "";

        const attackOption = <li><a href="#" onClick={() => setSubOptionAttackVisibility(true)}>{actionsData.seeYourOptions.replaceAll("##type##", currentChapter.fight.type)}</a>{attackIcon} {subAttackOptions}</li>
        return <p>{attackOption}{runAwayOption}</p>;
    };

    // VALIDATE CHAPTER VIEW
    const canChapterBeLoaded = currentChapter.fightAttack;
    if(!canChapterBeLoaded) {
      return <p>Error: The component requires fight attack object.</p>
    }

    // DEATH VIEW
    if (!isAlive) {
      return <span>
          <p>{attackExecuted.action.outcome}</p>
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
        {attackExecuted && <p>{attackExecuted.action.outcome}</p>}
        {buildOptions()}
        </span>
    }

    // ATTACK OPTION VIEW 
    if (attackExecuted) {
      const hasMoreRounds = currentChapter.fight.rounds[currentRoundIndex]
      if(!hasMoreRounds && attackExecuted.action.success) {
        return <span>
                  <p>{attackExecuted.action.outcome}</p>
                  <p>{currentChapter.fight.opponentDeath}</p>
                  <p><ul><li><a href="#" onClick={handleGoToNext}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li></ul></p>;
              </span>
      }

      if (attackExecuted.action.success === false) {
        return <span>
                  <p>{attackExecuted.action.outcome}</p>
                  <p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>
                  {buildOptions()}
              </span>
      }

      return <span><p>{attackExecuted.action.outcome}</p>{buildOptions()}</span>
    }
    
    // DEFAULT VIEW
    return <span><p>{currentChapter.text}</p>{buildOptions()}</span>
    
}

export default ChapterFightAttack;