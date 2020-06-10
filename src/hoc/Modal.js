import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ visible, header, children, onDismiss }) => {
  if (!visible) return <></>;

  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui modal visible active">
        <div className="close" onClick={onDismiss}>
          <i className="close icon"></i>
        </div>
        <div className="header">{header}</div>
        <div className="content">{children}</div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
