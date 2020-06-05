import React from 'react';
import '../styles/PizzaCard.scss';

const PizzaCard = ({ title, pizza, description, ingredients }) => {
  console.log(title, pizza, description);
  const bgImg = require(`../assets/pizzas/peperoni.jpg`);

  return (
    <div className="pizza-card">
      <div
        className="pizza-img"
        style={{
          background: `no-repeat center url(${bgImg})`,
        }}>
        <div className="ingredients-button">
          <i className="ellipsis horizontal icon"></i>
        </div>
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="pizza-icons">
          <div className="spicy">
            <i className="icon hotjar"></i>
          </div>
          <div className="vegans">
            <i className="icon leaf"></i>
          </div>
          <div className="persons">
            1<i className="icon user "></i>
          </div>
        </div>
        <div className="pizza-description">{description}</div>

        <div className="pizza-crust">
          <div className="two ui buttons">
            <div className="ui button ">Thin</div>
            <div className="ui button active">Traditional</div>
          </div>
        </div>

        <div className="pizza-radius">
          <div className="ui button">23cm</div>
          <div className="ui button active">30cm</div>
          <div className="ui button">35cm</div>
          <div className="ui button">40cm</div>
        </div>

        <div className="card-footer">
          <div className="ui button green">ADD TO CARD</div>
          <div className="card-price">
            20 <i className="euro sign icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
