import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addPostAction} from '../../redux/actions/addPostAction'
import {AppContext} from '../../context/AppContext'
import {CircularLoader} from '../CircularLoader/CircularLoader'
import './NoteForm.scss'

export const NoteForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userId} = useContext(AppContext)
    const [form,setForm] = useState({
        title: '',
        hashTags:[]
    })
    const [loading,setLoading] = useState(false)

    const onChangeHandler = (e) => {
        setForm({
            title:e.target.value,
            hashTags:e.target.value.match(/(#\w+)/g)
        })
    }

    const onAddNote = async() => {
        try {
            setLoading(true)
            await dispatch(addPostAction(form,userId))
            setForm({
                title: '',
                hashTags:[]
            })
            setLoading(false)
            navigate('/')
        }catch(e) {
            console.log(e)
        }
    }

    return (
        <form 
            onClick={e => e.preventDefault()}
            className="note-form">
            <h2 className="note-form__title">Add note</h2>
            <input 
                type="text" 
                name='title' 
                value = {form.title} 
                onChange={onChangeHandler} 
                placeholder="Title"
            />
            <button 
                disabled = {!form.title.trim().length}
                onClick={onAddNote}
                className="btn note-form__btn">
                    Add Note 
                    {loading && <CircularLoader/>}
                </button>
        </form>
    )
}