import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

export class BusinessList extends React.Component {
  render() {
    return(
      <div className="BusinessList">
        {
            <Business business = {business.id} />
            


        }}
      </div>
    );
  }
}
