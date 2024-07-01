import React, { useState } from 'react';

function TextComponent({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const firstSentence = text.split('. ')[0] + '.';

  return (
    <div>
      <p>{isExpanded ? text : firstSentence}</p>
      <button onClick={toggleText}>
        {isExpanded ? 'Скрыть' : 'Показать подробнее'}
      </button>
    </div>
  );
}

export default TextComponent;   