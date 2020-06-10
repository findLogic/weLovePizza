import React from 'react';
import './FooterBlock.scss';

const Footer = () => {
  return (
    <div className="ui vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            <h4 className="ui inverted header">About</h4>
            <div className="ui inverted link list">
              <a href="/" className="item">
                Contact Us
              </a>
            </div>
          </div>

          <div className="seven wide column">
            <h4 className="ui inverted header">Two words about project</h4>
            <p>
              This is a simple pizza delivery service with limited
              functionality. It uses its own separate database. Built using
              react / redux stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
