import React from 'react';
import actionsData from '../ActionsData';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";

function Chapter({ currentChapter, goToChapter, nextChapter }) {

  const buildChapterText = () => {
    return <p>{currentChapter.text}</p>
  };

  const buildChapterOptions = () => {

    const goToNext = <li><a href="#" onClick={() => goToChapter("next")}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li>;
    
    return <p>
            <ul>
            {nextChapter && <li><a href="#" onClick={() => goToChapter("next")}>{actionsData.goToNextChapter}</a> <TbPlayerTrackNextFilled /> </li>}
            {!nextChapter &&  <li><a href="#" onClick={() => goToChapter("start")}>{actionsData.startOver}</a> <LuRepeat2 /> </li>}
            </ul>
          </p>;
  }

  return <span>
            {buildChapterText()}
            {buildChapterOptions()}
        </span>;
}

export default Chapter;