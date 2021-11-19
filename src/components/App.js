// import dependencies:
import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // console.log("MOUNTED");
    const {params} = this.props.match
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  
  componentWillUnmount() {
    // console.log("UNMOUNTED");
    base.removeBinding(this.ref);

  }

  addFish = fish => {
    // 1. take a copy os the existing state
    const fishes = {...this.state.fishes};
    // 2. add the new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes });
    // console.log('adding a fish');
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
    // alert('Loading Samples! :D')
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
              ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;