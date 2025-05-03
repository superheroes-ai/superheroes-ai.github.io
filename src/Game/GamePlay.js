import React, { useState } from 'react';
import gameData from './Stories/Game.js';
import actionsData from './Stories/LocalizationsEn.js';
import Character from './CharacterInfo.js';
import { SiPagekit } from "react-icons/si";
import ChapterRecharge from './ChapterTypes/ChapterRecharge';
import Chapter from './ChapterTypes/Chapter';
import ChapterFightDefense from './ChapterTypes/ChapterFightDefense';
import ChapterFightAttack from './ChapterTypes/ChapterFightAttack';
import ChapterGoTo from './ChapterTypes/ChapterGoTo.js';

function GamePlay() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(1);

  const [currentStory, setCurrentStory] = useState('initStory');
  const [currentStoryChapterIndex, setCurrentStoryChapterIndex] = useState(0);
  
  const [character, setCharacterInternally] = useState({ health: 100 });

  const currentChapter = gameData[currentStory][currentStoryChapterIndex];
  const nextChapter = gameData[currentStory][currentStoryChapterIndex + 1];

  const setCharacter = (health) => {
    let newHealth = character.health + health;
    newHealth = newHealth < 0 ? 0 : newHealth;
    setCharacterInternally({...character, health: newHealth });
  }

  const goToChapter = (goto, chapterName) => {
    switch (goto) {
      case "next":
        setCurrentChapterIndex(currentChapterIndex + 1);
        
        setCurrentStoryChapterIndex(currentStoryChapterIndex + 1);
        break;
      case "start":
        setCurrentChapterIndex(1);
        
        setCurrentStoryChapterIndex(0);
        setCharacterInternally({...character, health: 100 });
        break;
      default:
        setCurrentChapterIndex(currentChapterIndex + 1);

        setCurrentStory(goto);
        const index =  chapterName ? gameData[goto].findIndex(obj => obj.name === chapterName) : 0;
        setCurrentStoryChapterIndex(index);
        break;
    }
  }

  const chapterKey = currentStory + currentStoryChapterIndex;
  const renderChapter = () => {
    if (currentChapter.recharge)
        return <ChapterRecharge key={chapterKey} currentChapter={currentChapter} character={character} setCharacter={setCharacter} goToChapter={goToChapter} />

    if (currentChapter.fightDefense)
      return <ChapterFightDefense key={chapterKey} currentChapter={currentChapter} character={character} setCharacter={setCharacter} goToChapter={goToChapter} />

    if (currentChapter.fightAttack)
      return <ChapterFightAttack key={chapterKey} currentChapter={currentChapter} character={character} setCharacter={setCharacter} goToChapter={goToChapter} />
  
    if (currentChapter.goto)
      return <ChapterGoTo key={chapterKey} currentChapter={currentChapter} goToChapter={goToChapter}/>


    return <Chapter key={chapterKey} currentChapter={currentChapter} nextChapter={nextChapter} goToChapter={goToChapter} />
  };

  return (
    <div>
      <Character character={character} />

      <article id="game" className="mb-4">
          <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7">
                    <h2 className="section-heading"> <SiPagekit /> {actionsData.chapter + " " + currentChapterIndex}: {currentChapter.name}</h2>
                    {renderChapter()}
              </div>
          </div>
          </div>
      </article>
    </div>
  );
}

export default GamePlay;