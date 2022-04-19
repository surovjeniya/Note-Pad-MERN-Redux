import {DELETE_POST} from '../actionTypes'
import axios from 'axios'

export const deletePostAction = (id) => {
    return async dispatch => {
        dispatch({
            type:DELETE_POST,
            deletedPost: await axios.delete(`/api/post/delete-post/${id}`)
        })
    }
}