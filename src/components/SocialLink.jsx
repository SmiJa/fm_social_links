import React from 'react'

const SocialLink = ({linkText, linkAddress}) => {
  return (
    <li>
      <a href={linkAddress}>{linkText}</a>
    </li>
  )
}

export default SocialLink
