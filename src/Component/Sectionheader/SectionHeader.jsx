import React from 'react'

const SectionHeader = ({icon,title,desc1,desc2, className}) => {
  return (
    <div className={`section_header ${ className}`}>
        <h3>{icon} {title} </h3>
        <span>{desc1} {desc2} </span>
    </div>
  )
}

export default SectionHeader