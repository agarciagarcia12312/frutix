import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import {Card,CardMedia, CardTitle, CardText} from 'material-ui/Card';
import data from '../helpers/data.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Food" value={0}
          icon={<FontIcon className="material-icons">restaurant</FontIcon>}/>
          <Tab label="Juice" value={1}
          icon={<FontIcon className="material-icons">local_drink</FontIcon>}/>
          <Tab label="Snacks" value={2}
          icon={<FontIcon className="material-icons">local_pizza</FontIcon>}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div  style={styles.headline}>
              <Menulist type='food'  arraylist={data.snackMenu}/>
          </div>
          <div style={styles.slide}>
            <Menulist type='juice'  arraylist={data.snackMenu}/>
          </div>
          <div style={styles.slide}>
            <Menulist type='snacks'  arraylist={data.snackMenu}/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}


class Menulist extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'intro'};
  }
  render(){
    return(
      <div>
        {/* catergory with link  */}
        <h3 className='capitalize'>{this.props.type}</h3>
        {/* map trough menu  */}
        {this.props.arraylist.map((item) => (
          <div className='col-sm-4'>
            <MenuItem data={item}/>
          </div>
        ))}
      </div>
    )
  }
}

class MenuItem extends Component {
  render(){
    return(
      <Card>
        <CardMedia>
          <img src={this.props.data.img} alt={this.props.data.title}/>
        </CardMedia>
        <CardTitle title={this.props.data.title} subtitle={this.props.data.price} />
        <CardText>
        {this.props.data.description}
        </CardText>
      </Card>
    )
  }
};
