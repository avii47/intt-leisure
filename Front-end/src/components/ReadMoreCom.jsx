import React, { useState } from 'react';

const ReadMoreComponent = ({ fullText, maxVisibleWords = 70, onExpand }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const wordsArray = fullText.split(' ');
    const visibleText = wordsArray.slice(0, maxVisibleWords).join(' ');
    const hiddenText = wordsArray.slice(maxVisibleWords).join(' ');

    const handleToggle = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        if (onExpand) onExpand(newState);
    };

    return (
        <div>
            <p className="font-secondary">
                {visibleText}
                {!isExpanded && hiddenText && '...'}
                {isExpanded && <span> {hiddenText}</span>}
            </p>

            {hiddenText && (
                <button className='btn btn-dark news-card-btn' onClick={handleToggle}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default ReadMoreComponent;
