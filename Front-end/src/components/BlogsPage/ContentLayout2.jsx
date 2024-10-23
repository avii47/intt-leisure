import React from 'react'

function ContentLayout2({ paragraphs }) {
  return (
    <div className='content-container'>
        {paragraphs.map((para, i) => (
            <li className="font-secondary" style={{marginTop:'20px'}} key={i}>
                {para}
            </li>
        ))}
    </div>
  )
}

export default ContentLayout2