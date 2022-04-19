import './NoteList.scss'
import {useEffect,useContext} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {AppContext} from '../../context/AppContext'
import {NoteItem} from '../NoteItem/NoteItem'
import {updatePostAction} from '../../redux/actions/updatePostAction'

export const NoteList = () => {

    const {userId} = useContext(AppContext)
    const posts = useSelector(state => state.posts.posts)
    const filteredPosts = useSelector(state => state.posts.filteredPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updatePostAction(userId))
    },[])

    console.log(filteredPosts)


    return (
        <ul className="note-list">
            <h2 className="note-list__title">Note List</h2>
            {filteredPosts.length ?filteredPosts.map(item => (
                <li key = {item._id}>
                    <NoteItem data = {item}/>
                </li>
            )) : posts.length ? posts.map(item => (
                <li key = {item._id}>
                    <NoteItem data = {item}/>
                </li>
            )) : <p>You dont have a notes</p>}
        </ul>
    )
}