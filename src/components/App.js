import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import UserGrid from './UserGrid';
import User from './User';

class App extends Component {

    state = {
      users : [],
      userData: null
    };
    submitForm = value =>{
      fetch(`https://api.github.com/search/users?q=${value}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.items);
        this.setState({ users: data.items });
      }); 
    }

    getUserData = value => {
      fetch(`https://api.github.com/users/${value}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ userData: data });
      });
    }
    backToHome = () =>{
      let data = this.state.userData;
      data = null;
      this.setState({userData: data})
    }


  render() {
    if(this.state.userData === null){
    return (
      <div className="App">
        <Header submitForm={this.submitForm} />     
        <UserGrid getUserData={this.getUserData} userdata={this.state.users}/>  
      </div>
    );
  }
  else {
    return (
      <div className="App">
      <Header submitForm={this.submitForm} />       
      <User backToHome={this.backToHome} userInf={this.state.userData}/>
    </div>
    )
  }
  }
}

export default App;
