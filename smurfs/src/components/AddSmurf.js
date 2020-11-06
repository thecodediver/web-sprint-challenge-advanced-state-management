import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'
import styled from 'styled-components'

const StyledAddSmurf = styled.div`
  display: flex;
  justify-content: center;
  .form-input {
    text-align: right;
    padding: 15px;
    input {
      width: 100px;
    }
  }
  button {
    padding: 20px;
    font-size: 1.3rem;
    background-color: blue;
    color: white;
    text-shadow: 1px 1px 2px black;
    box-shadow: 3px 3px 5px black;
  }
`

const AddSmurf = (props) => {
  const [form, setForm] = useState({ name: "", age: "", height: "", id: 1})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.addSmurf({name: form.name, age: form.age, height: form.height, id: form.id})
    setForm({
      ...form,
      id: form.id + 1
    })
  }
  return (
    <StyledAddSmurf>
      <form onSubmit={onSubmit}>
        <h1>Add A Smurf</h1>
        <div className="form-input">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange}/>
        </div>
        <div className="form-input">
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" name="age" min="0" max="120" value={form.age} onChange={handleChange}/>
        </div>
        <div className="form-input">
          <label htmlFor="height">Height: </label>
          <input type="text" id="height" name="height" value={form.height} onChange={handleChange}/>
        </div>
        <button>Add Smurf</button>
      </form>
    </StyledAddSmurf>
  )
}

export default connect(null, { addSmurf })(AddSmurf)