import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom';
class YearTabsRouter extends React.Component {
constructor(){
  super();
  this.state={style:{'fontSize': '16px'}}
 }
 render(){
   return <Link to={{pathname: '/', search: '?month=All&year='+this.props.year }}  style={this.state.style}>
     <p style={this.state.style}>{this.props.year} </p>
    </Link>
 }
}
export default YearTabsRouter;