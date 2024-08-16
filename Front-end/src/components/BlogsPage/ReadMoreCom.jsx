import React, { useState, useRef, useEffect } from 'react';

const ReadMoreComponent = ({ topic, shortText, fullText }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (isExpanded) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('0px');
        }
    }, [isExpanded]);


    return (
        <div>
            <h2 className='font-secondary' style={{letterSpacing:'0px'}}><b>{topic}</b></h2>
            <p className="font-secondary"> {shortText} </p>
            <div
                className={`slide-down ${isExpanded ? 'expand' : ''}`}
                style={{ maxHeight }}
                ref={contentRef}
            >
                {fullText.map((paragraph, index) => (
                    <p className="font-secondary" key={index}>{paragraph}</p>
                ))}
            </div>
            <button className='btn btn-sm' onClick={handleToggle}>
                {isExpanded ? 'Read Less' : 'Read More >>'}
            </button>
        </div>
    );
};

export default ReadMoreComponent;
