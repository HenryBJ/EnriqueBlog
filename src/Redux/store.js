import {createStore} from 'redux'
import {appReducer} from './reducers'
import initialData from '../data/PostsMock'

//const store = createStore(combineReducers({postReducer,commentReducer}) ,initialData)
const store = createStore(appReducer ,initialData)

export default store