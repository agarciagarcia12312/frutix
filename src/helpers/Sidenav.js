import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';

import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';


const iconStyles = {
  marginRight: 24,
};
const rowStyle={
  marginTop:10,
};

class Sidenav extends Component {
  render() {
    return(
      <Drawer
        docked={false}
        width={250}
        open={this.props.open}
        onRequestChange={() => this.props.close()}
      >
        <MenuItem style={rowStyle}><Link to={`/`}>
          <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
          <span className='menuName'>Home</span>
        </Link></MenuItem>
        <MenuItem style={rowStyle}><Link to={`/menu`}>
          <FontIcon className="material-icons" style={iconStyles}>chrome_reader_mode
          </FontIcon>
          <span className='menuName'>Menu</span>
        </Link></MenuItem>
        <MenuItem style={rowStyle}><Link to={`/delivery`}>
          <FontIcon className="material-icons" style={iconStyles}>motorcycle</FontIcon>
          <span className='menuName'>Delivery</span>
        </Link></MenuItem>
        <MenuItem style={rowStyle}><Link to={`/about`}>
          <FontIcon className="material-icons" style={iconStyles}>info_outline</FontIcon>
          <span className='menuName'>About</span>
        </Link></MenuItem>

      </Drawer>
    )
  }
};

export default Sidenav;
