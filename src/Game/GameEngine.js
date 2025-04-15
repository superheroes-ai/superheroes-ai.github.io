import React, { useState } from 'react';
import gameData from './GameData';
import actionsData from './ActionsData';
import Character from './Character';
import ChapterFight from './Chapters/ChapterFight';
import { SiPagekit } from "react-icons/si";
import ChapterRecharge from './Chapters/ChapterRecharge';
import Chapter from './Chapters/Chapter';

function GameEngine() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [character, setCharacter] = useState({ health: 100 });

  const currentChapter = gameData.chapters[currentChapterIndex];
  const nextChapter = gameData.chapters[currentChapterIndex + 1];

  const goToChapter = (goto) => {
    if (goto === "next") {
      setCurrentChapterIndex(currentChapterIndex + 1);
    } else if (goto === "start") {
      setCurrentChapterIndex(0);
      setCharacter({ health: 100 });
    }
  }

  const renderChapter = () => {
    if (currentChapter.recharge)
        return <ChapterRecharge currentChapter={currentChapter} character={character} setCharacter={setCharacter} goToChapter={goToChapter} />

    if (currentChapter.fight)
      return <ChapterFight currentChapter={currentChapter} character={character} setCharacter={setCharacter} goToChapter={goToChapter} />

    return <Chapter currentChapter={currentChapter} nextChapter={nextChapter} goToChapter={goToChapter} />
  };

  return (
    <div>
      <Character character={character} />

      <article id="game" class="mb-4">
          <div class="container px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                    <h2 class="section-heading"> <SiPagekit /> {actionsData.chapter + " " + (currentChapterIndex + 1)}</h2>
                    {renderChapter()}
              </div>
          </div>
          </div>
      </article>
    </div>
  );
}

export default GameEngine;