import React from 'react'

const SocialLink = ({linkText, linkAddress, target}) => {
  return (
    <li>
      <a href={linkAddress} target={target}>{linkText}</a>
    </li>
  )
}

export default SocialLink
