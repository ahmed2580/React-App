import React , { Component } from 'react';
// import {NavLink } from 'react-router-dom';



class UserGrid extends Component {
    render(){
        return(
            <div className="UserGrid">
            <ul>
               {this.props.userdata.map( req => {
                   return (
                    <a onClick={()=> this.props.getUserData(req.login)}>
                   <li key={req.login}>
                    <figure>
                    <figcaption>{req.login}</figcaption>
                    <img src={req.avatar_url} alt={req.login} /> 
                    </figure>
                 </li>
                 </a>
               )} )}
            </ul>
            
            </div>
        )
    }
}
export default UserGrid;