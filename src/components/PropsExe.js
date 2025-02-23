import React from 'react'

const PropsExe = ({color, logo}) => {
  return (
    <div>
      <header style={{
        "backgroundColor": color,
        "color": 'white'
      }}> 
      <h1> {logo} </h1> 
      </header>
    </div>
  )
}

export default PropsExe
