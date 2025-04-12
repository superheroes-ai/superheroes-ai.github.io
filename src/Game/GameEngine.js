import React, { useState } from 'react';
import gameData from './GameData';
import Character from './Character';
import { RiWaterFlashFill } from "react-icons/ri";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";

function GameEngine() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [fightOutcome, setFightOutcome] = useState('');
  const [character, setCharacter] = useState({ health: 100 });
  const [recharged, setRecharged] = useState(false);

  const currentChapter = gameData.chapters[currentChapterIndex];
  const isAlive = character.health > 0;

  const goToChapter = (goto) => {
    setRecharged(false);
    setCurrentRoundIndex(0);
    setCurrentAttempt(1);
    if (goto === "next") {
      setFightOutcome('');
      setCurrentChapterIndex(currentChapterIndex + 1);
    } else if (goto === "end") {
      setFightOutcome('');
      setCurrentChapterIndex(0);
      setCurrentAttempt(0);
      setCharacter({ health: 100 });
    }
  } 

  const handleAttack = (attack) => {
    setFightOutcome(attack.outcome);
    if (attack.sucess === true) 
    {
      setCurrentRoundIndex(currentRoundIndex + 1);
    } else {
      let health = character.health - currentChapter.fight.opponentAtackPower;
      let characterHealth = health < 0 ? 0 : health;
      setCharacter({ health: characterHealth });
    }
    setCurrentAttempt(currentAttempt + 1);
  };

  const rechargeHealth = () => {
    if (recharged === true)
       return;

    const rechargedHealth = character.health + currentChapter.recharge;
    const health = rechargedHealth > 100 ? 100 : rechargedHealth;
    setCharacter({ health: health });
    setRecharged(true);
  };

  const inFightWithRound = currentChapter.fight && currentChapter.fight.rounds[currentRoundIndex];

  return (
    <div>
      <Character character={character} />

      <article id="game" class="mb-4">
          <div class="container px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                    <h2 class="section-heading">Chapter {currentChapterIndex + 1}</h2>
                    <p>{isAlive ? fightOutcome || currentChapter.text : gameData.mainCharacterDeathScene}</p>
                    
                    <p>
                    {isAlive && inFightWithRound && inFightWithRound.attack_options && (
                      <div>
                        <h4>Fight! Round {currentAttempt}</h4>
                        <ul>
                        {inFightWithRound.attack_options.map((attack, index) => (
                          <li>{attack.name} <a href="#" onClick={() => handleAttack(attack)}>Use this attack</a></li>
                        ))}
                        </ul>
                        </div>
                    )}
                    </p>
                  <p>
                    <ul>
                      {!isAlive && (<li><span><a href="#" onClick={() => goToChapter("end")}>Start over</a> <LuRepeat2/></span></li>)}
                      {isAlive && currentChapter.recharge && (<li><span><a href="#" onClick={rechargeHealth}>Take time to recover</a> <RiWaterFlashFill color="green" /></span></li>)}
                      {isAlive && !inFightWithRound && (<li><a href="#" onClick={() => goToChapter("next")}>Go to next chapter</a> <TbPlayerTrackNextFilled /> </li>)}
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