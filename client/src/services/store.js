import {createStore, combineReducers} from 'redux'

import todoReducer from 'reducers/todoReducer'

const rootReducer = combineReducers(
  { 
    todo: todoReducer
    // namespace your reducers here
  }
)

export default createStore(rootReducer)