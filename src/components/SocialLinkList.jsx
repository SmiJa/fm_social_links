import React from 'react'
import userLinks from './../userLinks.json'
import SocialLink from './SocialLink'

const SocialLinkList = () => {
  return (
    <nav>
      {userLinks.map((index) => (
          <SocialLink key={index.id} linkText={index.LinkText} linkAddress={index.Link} target={"_blank"} icon={index.icon}/>
        ))}
    </nav>
  )
}

export default SocialLinkList
