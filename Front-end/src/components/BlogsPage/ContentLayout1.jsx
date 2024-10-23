import React from 'react'

const ContentLayout1 = ({ paragraphs }) => {
    return (
        <div className='content-container'>
            {paragraphs.map((para, i) => (
                <p className="font-secondary" key={i}>
                    {para}
                </p>
            ))}
        </div>
    )
};

export default ContentLayout1