import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { position } from './position'
import { notifies } from './notify'

const reducers = {
  routing,
  position,
  notifies,
}

export default combineReducers(reducers)
