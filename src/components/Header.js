import React , { Component } from 'react';
import logo from './logo.svg';


class Header extends Component {
    render(){
        return(
            <div className="NotFound">
                <header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                     <h1 className="App-title">GitHub User with React</h1>
                     <form onSubmit={(e)=>{
                         e.preventDefault();                       
                         this.props.submitForm(e.currentTarget.childNodes[0].value)
                     }}>
                     <input type="text"/>
                     <button>Seach</button>
                     </form>
                 </header>
            </div>
        )
    }
}
export default Header;