import React, { Component } from 'react';
import './View.css';



export default class View extends Component {

  render() {

    return (
        
      <div className="View View_flex">

      
      {this.props.children.map( (child, index) => 
        
        <div className={`View__item View__item_${index}`} key={`${index}`}> {child}  </div>
        )}
      </div>

    )
  }


}