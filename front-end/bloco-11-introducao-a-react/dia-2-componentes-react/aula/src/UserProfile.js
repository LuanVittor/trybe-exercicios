import React from "react";

class UserProfile extends React.Component {
  render() {
    const { name, email } = this.props.user
    return(
      <div className='userProfile'>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}

export default UserProfile