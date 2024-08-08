import React from 'react'

const SocialLink = ({linkText, linkAddress, target, icon}) => {
  return (
    <li>
      <a href={linkAddress} target={target}><i className={`bi ${icon}`}></i>{linkText}</a>
    </li>
  )
}

export default SocialLink
