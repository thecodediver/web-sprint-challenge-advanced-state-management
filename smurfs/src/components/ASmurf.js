import React from 'react'
import styled from 'styled-components'

const StyledASmurf = styled.div`
  flex: 1 1 300px;
  margin: 15px;
  padding: 10px;
  background-color: blue;
  box-shadow: 3px 3px 5px black;
`

const ASmurf = (props) => {
  return (
    <div key={props.smurf.name}>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  )
}

export default ASmurf