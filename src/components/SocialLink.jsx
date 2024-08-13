import React from 'react'

const SocialLink = ({linkText, linkAddress, target, icon}) => {
  return (
    <a href={linkAddress} target={target}><i className={`bi ${icon}`}></i>{linkText}</a>
  )
}

export default SocialLink
