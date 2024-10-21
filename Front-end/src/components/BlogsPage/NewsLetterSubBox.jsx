import React from 'react'
import "../CSS/NewsLetterSubBox.css"

function NewsLetterSubBox() {
  return (
    <div className='newsletter-sub-container'>
        <h3 className='font-primary' style={{fontSize:'30px'}}>News Letter</h3><hr />
        <p className='Font-secondary'>Subscribe our newsletter to get notification new updates</p>
        <input className='newsletter-sub-email' type="text" name="" id="" placeholder='Your Email Address' />
        <button className='btn newsletter-sub-btn'>Subscribe</button>
    </div>
  )
}

export default NewsLetterSubBox