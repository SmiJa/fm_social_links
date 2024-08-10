import React from 'react'

const UserInfo = ({userImage, name, location, quote}) => {
  return (
    <header>
      <img src={userImage} alt="" />
      <h1>{name}</h1>
      <h2>{location}</h2>
      <p>{quote}</p>
    </header>
  )
}

export default UserInfo
