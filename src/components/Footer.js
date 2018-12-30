import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import '../style/Footer.scss';


export default () => {
  return(
<div id="footer">
  <Segment.Group horizontal>
    <Segment>
    <Icon className="twitter" />
    </Segment>
    <Segment>
    <Icon className="facebook" />
    </Segment>
    <Segment>
     <Icon className="instagram" />
    </Segment>
  </Segment.Group>
</div>
  )
};
