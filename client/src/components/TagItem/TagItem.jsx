import './TagItem.scss'
import { useDispatch } from 'react-redux'
import {filterByTagAction} from '../../redux/actions/filterByTagAction'


export const TagItem = ({tag}) => {

    const dispatch = useDispatch()

    return (
        <button 
            onClick = {() => dispatch(filterByTagAction(tag))}
            className="btn tag-item">{tag}</button>
    )
}