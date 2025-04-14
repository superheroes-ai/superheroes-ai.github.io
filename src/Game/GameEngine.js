import React, { useState } from 'react';
import gameData from './GameData';
import actionsData from './ActionsData';
import Character from './Character';
import { RiWaterFlashFill } from "react-icons/ri";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";
import { BsFillLightningFill  } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiPagekit } from "react-icons/si";

function GameEngine() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [character, setCharacter] = useState({ health: 100 });
  const [recharged, setRecharged] = useState(false);
  const [attackOptions, setAttackOptions] = useState(false);
  const [attackExecuted, setAttackExecuted] = useState(null);

  const goToChapter = (goto) => {
    setRecharged(false);
    setAttackOptions(false);
    setCurrentRoundIndex(0);
    setAttackExecuted(null);

    if (goto === "next") {
      setCurrentChapterIndex(currentChapterIndex + 1);
    } else if (goto === "end") {
      setCurrentChapterIndex(0);
      setCharacter({ health: 100 });
    }
  } 

  const handleAttack = (attack) => {
    setAttackOptions(false);
    setAttackExecuted({ attack: attack });
    if (attack.success === true) 
    {
      setCurrentRoundIndex(currentRoundIndex + 1);
    } else {
      let health = character.health - currentChapter.fight.opponentAttackPower;
      let characterHealth = health < 0 ? 0 : health;
      setCharacter({ health: characterHealth });
    }
  };

  const rechargeHealth = () => {
    if (recharged === true)
       return;

    setCharacter({ health: character.health + currentChapter.recharge });
    setRecharged(true);
  };

  const currentChapter = gameData.chapters[currentChapterIndex];
  const hasMoreChapters = gameData.chapters[currentChapterIndex + 1];
  const isAlive = character.health > 0;
  const inFightWithRound = currentChapter.fight && currentChapter.fight.rounds[currentRoundIndex];

  const buildChapterText = () => {
    if (isAlive)
    {
      if (attackExecuted) {
          const hasMoreRounds = currentChapter.fight.rounds[currentRoundIndex]
          if(!hasMoreRounds && attackExecuted.attack.success) {
            return <span>
                      <p>{attackExecuted.attack.outcome}</p>
                      <p>{currentChapter.fight.opponentDeath}</p>
                  </span>
          }

          if (attackExecuted.attack.success == false) 
          {
            return <span>
                      <p>{attackExecuted.attack.outcome}</p>
                      <p>{actionsData.yourHealthDecreased + " " + currentChapter.fight.opponentAttackPower + "!"}</p>
                  </span>
          }

        return <p>{attackExecuted.attack.outcome}</p>
      }

      if (recharged) {
          return <span>
                    <p>{currentChapter.text}</p>
                    <p>{actionsData.yourHealthIncreased + " " + currentChapter.recharge + "!"}</p>
                </span>
      }

      return <p>{currentChapter.text}</p>
    }

    return <p>{gameData.mainCharacterDeathScene}</p>
  };

  return (
    <div>
      <Character character={character} />

      <article id="game" class="mb-4">
          <div class="container px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                    <h2 class="section-heading"><SiPagekit /> {actionsData.chapter + " " + (currentChapterIndex + 1)}</h2>
                    {buildChapterText()}
                    <p>
                    {isAlive && inFightWithRound && (<span><a href="#" onClick={() => setAttackOptions(true)}>{actionsData.seeYourAttackOptions}</a><BsFillLightningFill  color="blue"/></span>)}
                    {isAlive && inFightWithRound && attackOptions && inFightWithRound.attack_options && (
                        <ul>
                        {inFightWithRound.attack_options.map((attack) => (
                          <li><a href="#" onClick={() => handleAttack(attack)}>{attack.name}</a> <FaArrowRightLong /> {attack.action}</li>
                        ))}
                        </ul>
                    )}
                    </p>
                  <p>
                    <ul>
                      {!isAlive || !hasMoreChapters && (<li><span><a  href="#" onClick={() => goToChapter("end")}>{actionsData.startOver}</a> <LuRepeat2/></span></li>)}
                      {isAlive && currentChapter.recharge && (<li><span><a  href="#" onClick={rechargeHealth}>{actionsData.recover}</a> <RiWaterFlashFill color="green" /></span></li>)}
                      {isAlive && !inFightWithRound && hasMoreChapters && (<li><a href="#" onClick={() => goToChapter("next")}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li>)}
                    </ul>
                  </p>
              </div>
          </div>
          </div>
      </article>
    </div>
  );
}

export default GameEngine;