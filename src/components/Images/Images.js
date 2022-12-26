import React from "react";
import PropTypes from 'prop-types';

    // Логотип Яндекс
function Images({src, alt}) {
    return <img src={src} alt={alt} />
}

Images.propTypes ={
    src: PropTypes.string,
    alt: PropTypes.string
};

export {Images};