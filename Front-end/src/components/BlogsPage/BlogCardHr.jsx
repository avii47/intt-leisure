import React from 'react'

function BlogCardHr({ title, date, img}) {
  return (
    <div className='blogCardHr-container'>
        <div className="col-md-6">
            <img src={img} alt="" />
        </div>
        <div className="col-md-6">
            <p className="font-secondary">{date}</p>
            <h6 className='font-secondary'>{title}</h6>
        </div>

    </div>
  )
}

export default BlogCardHr