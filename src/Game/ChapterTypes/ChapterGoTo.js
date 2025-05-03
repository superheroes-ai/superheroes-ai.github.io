import React from 'react';

function ChapterGoTo({ currentChapter, goToChapter }) {

    const handleGoTo = (story, chapter) => {
        goToChapter(story, chapter);
    };
    

    // VALIDATE CHAPTER VIEW
    if(!currentChapter.goto) {
        return <p>Error: The component requires goTo object.</p>
    }
    
    return <span>
          <p>{currentChapter.text}</p>
            {
                currentChapter.goto.map((goto) => 
                (
                    <span>{goto.text} <ul><li><a href="#" onClick={() => handleGoTo(goto.story, goto.chapter)}>{goto.option}</a></li></ul></span>
                ))
            }
        </span>;
}

export default ChapterGoTo;