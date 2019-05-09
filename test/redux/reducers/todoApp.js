import { combineReducers } from 'redux'


import * as reducers from './fun'


const todoApp = combineReducers(reducers)

export default todoApp