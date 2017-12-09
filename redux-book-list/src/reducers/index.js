import {
  combineReducers
} from 'redux'
import BooksReducer from './booksReducer'
import ActiveBookReducer from './activeBookReducer'

export default combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
})