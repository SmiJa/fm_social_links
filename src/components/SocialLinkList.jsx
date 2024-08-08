import React from 'react'
import userLinks from './../userLinks.json'
import SocialLink from './SocialLink'

const SocialLinkList = () => {
  return (
    <ul>
      {userLinks.map((index) => (
          <SocialLink key={index.id} linkText={index.LinkText} linkAddress={index.Link} target={"_blank"} icon={index.icon}/>
        ))}
    </ul>
  )
}

export default SocialLinkList
