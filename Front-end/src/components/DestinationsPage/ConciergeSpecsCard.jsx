import React from 'react'
import useIcon from '../../hooks/useIcon'
import '../CSS/ConciergeSpecsCard.css'

function ConciergeSpecsCard({ img, text }) {

  const { loading, error, icon } = useIcon(img)

    return (
        <div className='con-icon-card'>
          <img src={icon} className='con-icon-img' alt="Icon" />
          <span className='font-secondary con-icon-txt'>{text}</span>
        </div>
      );
}


export default ConciergeSpecsCard