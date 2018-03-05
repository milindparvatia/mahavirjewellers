import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import NormalView from './NormalView/NormalView';

export default class iteamdetail extends React.Component {

constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 1025;
    // the rest is the same...
  
    if (isMobile) {
      return (

        123
      );
    } else {
      return (
        <Aux>
          <NormalView ItemDetail={this.state}/>
        </Aux>
      );
    }
  }
}