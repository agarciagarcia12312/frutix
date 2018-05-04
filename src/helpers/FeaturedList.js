import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import data from  './data.js';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};


/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
 class FeaturedList extends Component {
   render(){
     return(
       <div style={styles.root}>
         <GridList style={styles.gridList} cols={2.2}>
           {this.props.arraylist.map((tile) => (
             <GridTile
               key={tile.img}
               title={tile.title}
               // actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
               titleStyle={styles.titleStyle}
               titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
             >
               <img src={tile.img} />
             </GridTile>
           ))}
         </GridList>
       </div>
     )
   }
 }


export default FeaturedList;
