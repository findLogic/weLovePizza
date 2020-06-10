import React from 'react';

const WithPopup = ({ children, popupText, position = 'top right' }) => {
  return (
    <div data-tooltip={popupText} data-position={position}>
      {children}
    </div>
  );
};

export default WithPopup;
