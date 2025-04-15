import React, { useState } from 'react';
import gameData from '../GameData';
import actionsData from '../ActionsData';
import { BsFillLightningFill  } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaShieldVirus } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";

function ChapterFight({ currentChapter, character, setCharacter, goToChapter}) {
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
    const [optionsVisibility, setOptionsVisibility] = useState(false);
    const [actionExecuted, setActionExecuted] = useState(null);

    const isAlive = character.health > 0;
    const inFightWithRound = currentChapter.fight && currentChapter.fight.rounds[currentRoundIndex];
    
    const handleAction = (action) => {
        setOptionsVisibility(false);
        setActionExecuted({ action: action });
    
        if (action.success === false) {
          let health = character.health - currentChapter.fight.opponentAttackPower;
          let characterHealth = health < 0 ? 0 : health;
          setCharacter({ health: characterHealth });
        }
    
        if (currentChapter.fight.type === "defense" || action.success === true) 
        {
          setCurrentRoundIndex(currentRoundIndex + 1);
        }
      };

    const buildChapterText = () => {
        if (!isAlive) {
                return <span>
                    <p>{actionExecuted.action.outcome}</p>
                    <p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>
                    <p>{gameData.mainCharacterDeathScene}</p>
                </span>
        }
    
        if (currentChapter.fight && currentChapter.fight.type === "attack") {
          if (actionExecuted) {
            const hasMoreRounds = currentChapter.fight.rounds[currentRoundIndex]
            if(!hasMoreRounds && actionExecuted.action.success) {
              return <span>
                        <p>{actionExecuted.action.outcome}</p>
                        <p>{currentChapter.fight.opponentDeath}</p>
                    </span>
            }
    
            if (actionExecuted.action.success == false){
              return <span>
                        <p>{actionExecuted.action.outcome}</p>
                        <p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>
                    </span>
            }
    
          return <p>{actionExecuted.action.outcome}</p>
          }
        }
    
        if (currentChapter.fight && currentChapter.fight.type === "defense") {
          if (actionExecuted) {
            const hasMoreRounds = currentChapter.fight.rounds[currentRoundIndex]
            if(!hasMoreRounds) {
              return <span>
                      <p>{actionExecuted.action.outcome}</p>
                      {actionExecuted.action.success == false && (<p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>)}
                      <p>{currentChapter.fight.mainCharacterEscapeText}</p>
                  </span>
            }
    
            return <span>
                      <p>{actionExecuted.action.outcome}</p>
                      {actionExecuted.action.success == false && (<p>{actionsData.yourHealthDecreased.replaceAll("##health##" , currentChapter.fight.opponentAttackPower)}</p>)}
                      <p>{inFightWithRound.opponentAttack}</p>
                  </span>
          }
    
          return <span>
                    <p>{currentChapter.text}</p>
                    <p>{inFightWithRound.opponentAttack}</p>
                </span>
        }
    
        return <p>{currentChapter.text}</p>;
    };

    const buildChapterOptions = () => {
        if (!isAlive) {
          return <p><ul><li><a href="#" onClick={() => goToChapter("start")}>{actionsData.startOver}</a> <LuRepeat2 /> </li></ul></p>;
        }
  
        if (!inFightWithRound) {
          return <p><ul><li><a href="#" onClick={() => goToChapter("next")}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li></ul></p>;
        }
      
        const fightType = currentChapter.fight.type;
        const attackOrDefenseIcon = fightType === "attack" ? <BsFillLightningFill  color="blue"/> : <FaShieldVirus color='green' />;
        
        const optionsHeaderText = (<span><a href="#" onClick={() => setOptionsVisibility(true)}>{actionsData.seeYourOptions.replaceAll("##type##", fightType)}</a>{attackOrDefenseIcon}</span>);
  
        if (!optionsVisibility) {
            return <p>{optionsHeaderText}</p>;
        }
        
        const fightOptions = <ul>
                          {inFightWithRound.options.map((attackOrDefense) => (
                            <li><a href="#" onClick={() => handleAction(attackOrDefense)}>{attackOrDefense.name}</a> <FaArrowRightLong /> {attackOrDefense.action}</li>
                          ))}
                            </ul>;
  
       return  <p>{optionsHeaderText}{fightOptions}</p>;
    };
  
    const goToNext = <li><a href="#" onClick={() => goToChapter("next")}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li>;
    return <span>
            {buildChapterText()}
            {buildChapterOptions()}
            </span>;
}

export default ChapterFight;