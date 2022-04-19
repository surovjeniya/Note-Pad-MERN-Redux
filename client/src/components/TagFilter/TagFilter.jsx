import './TagFilter.scss'
import {useContext,useEffect} from 'react'
import {AppContext} from '../../context/AppContext'
import {useSelector,useDispatch} from 'react-redux'
import {updatePostAction} from '../../redux/actions/updatePostAction'
import { TagItem } from '../TagItem/TagItem'

export const TagFilter = () => {

    const {userId} = useContext(AppContext)
    const tags = useSelector(state => state.posts.tags)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updatePostAction(userId))
    },[])
    console.log(tags)

    return (
        <ul className="tag-filter">
            {tags.length ? tags.map(item => (
                <li key ={item}>
                    <TagItem tag = {item} />
                </li>
            )):<p>You dont have a tags</p>}
        </ul>
    )
}