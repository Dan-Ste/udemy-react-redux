import { FETCH_POSTS, FETCH_POST } from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      const post = action.payload.data
      return { ...state, [post.id]: post}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default: 
      return state
  }
}