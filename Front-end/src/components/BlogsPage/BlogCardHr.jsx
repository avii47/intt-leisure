import React from 'react'
import { useMobileView } from "../../contexts/MobileViewContext";
import '../CSS/BlogCardHr.css'

const BlogCardHr = React.forwardRef(({content, style, onClick}, ref) => {

  const isMobileView = useMobileView();

  return (
    <div className={`blogCardHr-container ${isMobileView ? "mobile-view" : "" }`} ref={ref} style={style} onClick={onClick}>
        <div className="col-md-4">
            <img src={`${content.img}`} className='blogCardHr-img' alt="" />
        </div>
        <div className="col-md-8" style={{paddingLeft: isMobileView? '15px':'50px'}}>
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