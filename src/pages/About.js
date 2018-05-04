import React from 'react';
import {Card,CardMedia,CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const About = () => (
  <div>
    <Card>
      <CardMedia>
        <img src={this.bimg} alt='frutix'/>
      </CardMedia>
      <CardTitle title='Frutix Denver'
        subtitle={<a target="_blank"
           href="http://maps.google.com/?q=1445 Florence St, Aurora, Colorado, 80010">
          1445 Florence St, Aurora Co</a>}
      />
      <CardText>
      frutix description
      </CardText>
      <CardActions>
        {<a target="_blank" href="tel:720-728-8196"><FlatButton label="Call" /></a> }
        {<a target="_blank"
           href="http://maps.google.com/?q=1445 Florence St, Aurora, Colorado, 80010">
         <FlatButton label="Get Dirrections" /></a>}
     </CardActions>
    </Card>
    {/* <img src='./images/bimage.jpg' alt='Frutix'/> */}
    {/* summary */}
    {/* hours */}
    {/* Address */}
    {/* phone */}


  </div>
);

export default About;
