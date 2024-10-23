import React from 'react'
import '../CSS/BlogCardHr.css'

const BlogCardHr = React.forwardRef(({content, style, onClick}, ref) => {
  return (
    <div className='blogCardHr-container' ref={ref} style={style} onClick={onClick}>
        <div className="col-md-4">
            <img src={`${content.img}`} className='blogCardHr-img' alt="" />
        </div>
        <div className="col-md-8" style={{paddingLeft:'50px'}}>
            <p className="font-secondary blogCardHr-date">
              <i className="fa-solid fa-calendar-days blogCardHr-icons"></i>
              {content.date}
            </p>
            <h6 className='font-secondary blogCardHr-title'>{content.title}</h6>
        </div>
    </div>
  )
});

export default BlogCardHr