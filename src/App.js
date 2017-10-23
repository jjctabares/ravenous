import React, { Component } from 'react';
import './App.css';
import {BusinessList} from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import {Yelp} from './components/Yelp/Yelp';



class App extends Component {
  constructor(props) {
      super(props);

      this.state={
      businesses:[]
      };
      this.searchYelp = this.searchYelp.bind(this);

    }
searchYelp(term, location, sortBy) {
  Yelp.search(term, location, sortBy).then(businesses=>{
    this.setState({
      this.state.businesses=businessess[]
    })
  });
}

  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
    <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList  businessarray = {businesses}/>
</div>
    );
  }
}

export default App;
