import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/">
              <MenuItem  onClick={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to="/Coin">
              <MenuItem  onClick={this.handleClose}>Coin</MenuItem>
          </Link>
          <Link to="/ItemDetails">
              <MenuItem  onClick={this.handleClose}>Coin Details</MenuItem>
          </Link>
          <Link to="/CheckOut">
              <MenuItem  onClick={this.handleClose}>CheckOut</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}
