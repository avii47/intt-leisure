import React from 'react'

const ContentLayout1 = ({ paragraphs }) => {
    return (
        <div className='content-container'>
            {paragraphs.map((para, i) => (
                <p className="font-secondary" style={{marginTop:'20px'}} key={i}>
                    {para}
                </p>
            ))}
        </div>
    )
};

export default ContentLayout1