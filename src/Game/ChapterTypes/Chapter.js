import React from 'react';
import actionsData from '../Stories/LocalizationsEn';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { LuRepeat2 } from "react-icons/lu";

function Chapter({ currentChapter, goToChapter, nextChapter }) {
  const handleGoToNext = () => {
    goToChapter('next');
  };

  const handleStartOver = () => {
    goToChapter('start');
  };

  return <span>
          <p style={{ whiteSpace: 'pre-line' }}>{currentChapter.text}</p>
            <ul>
              {nextChapter ? (
              <li>
                <a href="#" onClick={handleGoToNext}>
                  {actionsData.goToNextChapter} <TbPlayerTrackNextFilled />
                </a>
              </li>
            ) : (
              <li>
                <a href="#" onClick={handleStartOver}>
                  {actionsData.startOver} <LuRepeat2 />
                </a>
              </li>
            )}
          </ul>
      </span>;
}

export default Chapter;