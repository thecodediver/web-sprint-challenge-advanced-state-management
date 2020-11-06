import React from 'react'
import ASmurf from './ASmurf'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/index'
import styled from 'styled-components'

const StyledTheSmurfs = styled.div`
  .smurfs-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

const TheSmurfs = (props) => {
  return (
    <StyledTheSmurfs>
      <h1>The Smurfs</h1>
      <div className="smurfs-container">
        {props.smurfs.map(smurf => <ASmurf key={smurf.name} smurf={smurf}/>)}
      </div>
    </StyledTheSmurfs>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(TheSmurfs)