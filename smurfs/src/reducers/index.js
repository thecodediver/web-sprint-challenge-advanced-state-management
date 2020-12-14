import { ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, GOT_SMURF, GET_SMURF } from '../actions/index'

const initialState = {
  isLoading: true,
  smurfs: [],
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF:
      return {
        ...state,
        isLoading: true,
        error: ""
      }
    case GOT_SMURF:
      return {
        ...state,
        isLoading: false,
        smurfs: [
          ...action.payload
        ],
        error: ""
      }
    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true,
        smurfs: [
          ...state.smurfs
        ],
        error: ""
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: [
          ...action.payload
        ],
        error: ""
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        smurfs: [
          ...state.smurfs
        ],
        error: action.payload
      }
    default:
      return state
  }
}