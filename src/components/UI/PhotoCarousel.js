import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import './UI_css/PhotoCarouselStyles.css'

const PhotoCarousel = ({photos}) => {

    const [index, setIndex] = useState(0);
    const [fade, setfade] = useState(false);

    const nextPhoto = () => {
        if (index < photos.length - 1) {
            setIndex(index + 1);
            setfade(true);
        }
    };
    const prevPhoto = () => {
        if (index > 0) {
            setIndex(index - 1);
            setfade(true);
        }
    };

    return (
        <div className='photoContainer'>
            {!photos ? (<Spinner/>) : (
                <Fragment>
                    {index <= 0 ? (<div></div>) : (<div className='photoToggler' onClick={prevPhoto}>
                        <i className="fas fa-chevron-left fa-3x"></i>
                    </div>)}


                    <img className={fade ? 'animate' : ''} src={photos[index].photoLarge} alt="" onAnimationEnd={() => setfade(false)}/>

                    {index >= photos.length-1 ? (<div></div>) :(
                    <div className='photoToggler' onClick={nextPhoto}>
                        <i className="fas fa-chevron-right fa-3x"></i>
                    </div>)}
                </Fragment>)}
        </div>
    );
};

PhotoCarousel.propTypes = {
    photos: PropTypes.array.isRequired,
};

export default PhotoCarousel;
