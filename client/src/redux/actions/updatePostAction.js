import {UPDATE_POST} from '../actionTypes'
import axios from 'axios'

export const updatePostAction = (id) => {
    return async dispatch => {
        dispatch({
            type:UPDATE_POST,
            posts: await axios.get('api/post/post-list',{params:{userId:id}})
        })
    }
}