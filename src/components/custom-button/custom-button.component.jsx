import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleAuth, ...otherProps }) => {
  return(
    <button className={`
          ${isGoogleAuth ? 'google-sign-in' : ''} custom-button` }
      {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;