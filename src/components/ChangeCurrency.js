import React from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../actions/';
import '../styles/ChangeCurrency.scss';

const ChangeCurrency = ({ currency, changeCurrency }) => {
  const renderIcons = () => (
    <>
      <i
        className={`icon sign ${
          currency.activeCurrency === 'euro' ? 'euro' : 'dollar'
        }`}></i>
      <i className="icon arrow right"></i>
      <i
        className={`icon sign ${
          currency.activeCurrency === 'euro' ? 'dollar' : 'euro'
        }`}></i>
    </>
  );

  const handleButtonClick = () => {
    currency.activeCurrency === 'euro'
      ? changeCurrency(
          currency.options.find((el) => el.currency === 'dollar').value,
          'dollar',
        )
      : changeCurrency(
          currency.options.find((el) => el.currency === 'euro').value,
          'euro',
        );
  };

  return (
    <div className="change-currency" onClick={() => handleButtonClick()}>
      {renderIcons()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps, { changeCurrency })(ChangeCurrency);
