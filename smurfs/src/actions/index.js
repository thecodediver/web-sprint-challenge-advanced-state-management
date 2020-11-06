import axios from 'axios'
export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'
export const GET_SMURF = 'GET_SMURF'
export const GOT_SMURF = 'GOT_SMURF'


export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURF
  })
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res.data)
    dispatch({
      type: GOT_SMURF,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: ADD_SMURF_FAILURE,
      payload: 'He could not add that smurf sorry'
    })
  })
}

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADD_SMURF_START
  })
  axios.post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    dispatch({
      type: ADD_SMURF_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: ADD_SMURF_FAILURE,
      payload: "We are having issues finding our smurfs, they like to play hide and seek!"
    })
  })
}