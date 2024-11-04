import React from 'react'
import '../CSS/ConciergeSpecsCard.css'

function ConciergeSpecsCard({ img, text }) {
    return (
        <div className='con-icon-card'>
          <img src={img} className='con-icon-img' alt="Icon" />
          <span className='font-secondary con-icon-txt'>{text}</span>
        </div>
      );
}


export default ConciergeSpecsCard