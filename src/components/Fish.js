import React from 'react';
// eslint-disable-next-line
import AddFishForm from './AddFishForm';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    handleClick = () => {
      this.props.addToOrder(this.props.index);
    }
  render() {
    const { image, name, price, desc, status } = this.props.details;
    // const isAvailable = status === 'available';
    const isAvailable = status === 'available';
    return (
        <li className="menu-fish">
          <img src={image} alt={name} />
          <h3 className="fish-name"> 
          {name}
          <span className="price">{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button 
            disabled={!isAvailable} 
            onClick={this.handleClick}>
              {isAvailable ? 'Add To Oder' : 'Sold Out'}
          </button>
        </li>
      )
  }
}

export default Fish;