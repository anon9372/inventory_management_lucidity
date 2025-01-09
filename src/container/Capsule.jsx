import React from 'react'

const Capsule = (props) => {
  return (
    <div style={{width: 'fit-content', padding: '5px', background: '#161718', color: '#7B8845', borderRadius: '5px'}}>{props.children}</div>
  )
}

export default Capsule