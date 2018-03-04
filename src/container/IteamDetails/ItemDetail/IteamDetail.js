import React from 'react';

import Aux from '../../../hoc/Auxiliary';



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
        <table>
                <thead>
                        <tr>
                            <th>
                                <h1>
                                    Chain
                                </h1>
                            </th>
                        </tr>
                    </thead>
                <tbody>
                        <tr>
                            <th>Code</th>
                            <th>123</th>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <th>3.5 grm</th>
                        </tr>
                        <tr>
                            <th>Metal</th>
                            <th>18k Gold</th>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <th>22,222</th>
                        </tr>
                </tbody>
        </table>
    </Aux>
      );
    }
  }
}