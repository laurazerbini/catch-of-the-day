import React, { Fragment } from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component { 
  myInput = React.createRef();

  goToStore = event => {
    // 1. prevent the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. change the page to /store/whatever-the-name-is
    this.props.history.push(`/store/${storeName}`);
  };
  render() {    
    return (
      <Fragment>
        <p>Fish!</p>
        <form className="store-selector" onSubmit={this.goToStore}>
            { /* comment */ } 
          <h2>Please Enter a Store</h2>
          <input 
            type="text" 
            ref={this.myInput}
            placeholder="Store Name" 
            defaultValue={getFunName()} 
          />
          <button type="submit">Visit Store -> </button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;
