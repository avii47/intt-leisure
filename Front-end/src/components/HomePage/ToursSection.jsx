import React from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home/TourSection.css';

function ToursSection({ imageUrl, title, sub, description, spec1, spec1Icon, spec2, spec2Icon, buttonLabel, link }) {

    let vertical = null;
    if (link === "destinations") {
        vertical = true;
    }
    else {
        vertical = false;
    }

    const isMobileView = useMobileView();
    const navigate = useNavigate();

    const handleOnClick = (path) => {
        navigate(path);
    };

    return (
        <div className={`tourSection-container  ${isMobileView ? 'mobile-view' : ''}`} style={{ marginTop: isMobileView ? '4rem' : '8rem' }}>
            <div className="tourSection-content">
                {(isMobileView) && (
                    <>
                        <h5 className="card-subtitle font-secondary">{sub}</h5><hr style={{ width: isMobileView ? '65%' : '32%' }} />
                        <h1 className="font-primary">{title}</h1>
                        {(vertical) && (<div className="col-md-6 d-flex" style={{ justifyContent: 'center' }}>
                            <img src={imageUrl} alt="Tour" className="tourSection-card-image-v" />
                        </div>)}
                        {(!vertical) && (<div className="col-md-6 d-flex" style={{ justifyContent: 'left' }}>
                            <img src={imageUrl} alt="Tour" className="tourSection-card-image" />
                        </div>)}
                        <p className="card-description font-secondary">{description}</p>
                        <div className="card-options">
                            <div className="card-option">
                                <img src={spec1Icon} className="card-icon" />
                                <span className='font-secondary' style={{ fontSize: isMobileView ? '12px' : '' }}>{spec1}</span>
                            </div>
                            <div className="card-option">
                                <img src={spec2Icon} className="card-icon" />
                                <span className='font-secondary' style={{ fontSize: isMobileView ? '12px' : '' }}>{spec2}</span>
                            </div>
                        </div>
                        <button className="card-button" onClick={() => handleOnClick(`${link}`)}>{buttonLabel}</button>
                    </>
                )}

                {(!isMobileView) && (
                    <>
                        {(vertical) && (<div className="col-md-6 d-flex" style={{ justifyContent: 'center' }}>
                            <img src={imageUrl} alt="Tour" className="tourSection-card-image-v" />
                        </div>)}
                        {(!vertical) && (<div className="col-md-6 d-flex" style={{ justifyContent: 'left' }}>
                            <img src={imageUrl} alt="Tour" className="tourSection-card-image" />
                        </div>)}
                        <div className="col-md-6 tourSection-card-con">
                            <div className="tourSection-card-content">
                                <h5 className="card-subtitle font-secondary">{sub}</h5><hr style={{ width: isMobileView ? '65%' : '32%' }} />
                                <h1 className="font-primary">{title}</h1>
                                <p className="card-description font-secondary">{description}</p>
                                <div className="card-options">
                                    <div className="card-option">
                                        <img src={spec1Icon} className="card-icon" />
                                        <span className='font-secondary' style={{ fontSize: isMobileView ? '12px' : '' }}>{spec1}</span>
                                    </div>
                                    <div className="card-option">
                                        <img src={spec2Icon} className="card-icon" />
                                        <span className='font-secondary' style={{ fontSize: isMobileView ? '12px' : '' }}>{spec2}</span>
                                    </div>
                                </div>
                                <button className="card-button" onClick={() => handleOnClick(`${link}`)}>{buttonLabel}</button>
                            </div>
                        </div>
                    </>
                )}




            </div>

        </div>
    );
}

export default ToursSection;
