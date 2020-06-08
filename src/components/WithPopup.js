import React from 'react';

const WithPopup = ({ children, popupText }) => {
  return (
    <div data-tooltip={popupText} data-position="top center">
      {children}
    </div>
  );
};

export default WithPopup;
