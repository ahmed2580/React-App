import React ,{ Component}from 'react';

class User extends Component {
    render(){
        console.log(this.props.userInf)
        const user = this.props.userInf;
        if(user !== null){
    return(
        <div className="User">
            <a onClick={()=>{this.props.backToHome()}}>back to home</a>
            <li key={user.login}>
                <figure>
                    <figcaption>{user.login}</figcaption>
                    <img className="img" src={user.avatar_url} alt={user.login} /> 
                </figure>
            </li>
        </div>)
        }
        return <div>not found</div>
    }
}
export default User;