import './NoteItem.scss'
import { useDispatch } from 'react-redux'
import {deletePostAction} from '../../redux/actions/deletePostAction'
import {updatePostAction} from '../../redux/actions/updatePostAction'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'



export const NoteItem = ({data}) => {
    
    const {userId} = useContext(AppContext)
    const dispatch = useDispatch()


    const onDeleteHandler = async() => {
        try {
            await dispatch(deletePostAction(data._id))
            await dispatch(updatePostAction(userId))
        }catch (e){
            console.log(e.message)
        }
    }

    return(
        <div className="note-item">
            <p className="note-item__title">{data.title}</p>
            <button 
                onClick={onDeleteHandler}
                className="btn red">Delete</button>
        </div>
    )
}