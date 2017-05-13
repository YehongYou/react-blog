import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state ={}, action){
  switch (action.type) {
    case DELETE_POST
      return _.map(state,action.payload); // look at current state, if obj has key of payload(id) we has deleted, jus
    case FETCH_POST:
      // const post = action.payload.data    es5!!!!
      // const newSate = {...state}; // take all the existing posts we have
      // newSate[post.id]=post
      // return newSate;
      return {...state, [action.payload.data.id]: action.payload.data} //es6!!!
      //                 not arry, it is new key
    case FETCH_POSTS:
      //  console.log(action.payload); //[post1, post2]
      return _.mapKeys(action.payload.data,'id');
    default:
      return state;
  }
}
