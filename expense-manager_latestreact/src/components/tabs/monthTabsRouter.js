import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
class MonthTabsRouter extends React.Component {
  constructor() {
    super();
    this.state = { style: { 'fontSize': '10px' } }
  }
  render() {
    if (this.props.tabId === 'All') {
      const link = '/?month=All&year=' + this.props.year;
      return (
        <a href={link}> <p style={this.state.style}>Show All </p> </a>
      );
      // return <Link to={{ pathname: '/', search: '?month=All&year=' + this.props.year }} >
      //   {/* <p style={this.state.style}>Show All </p> */}
      //   Show All
      // </Link>
    }
    else {
      const link = '?month=' + this.props.tabId+ '&year=' + this.props.year;
      return (
        <a href={link}> <p style={this.state.style}>{this.props.tabId} {this.props.year} </p> </a>
      );
      // return <Link to={{ pathname: '/', search: '?month=' + this.props.tabId + '&year=' + this.props.year }} >
      //   {/* <p style={this.state.style}> {this.props.tabId} {this.props.year} </p> */}
      //   {this.props.tabId} {this.props.year}
      // </Link>
    }
  }
}
export default MonthTabsRouter;