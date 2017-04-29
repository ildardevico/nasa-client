import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { position } from './position'

const reducers = {
  routing,
  position
}

export default combineReducers(reducers)
