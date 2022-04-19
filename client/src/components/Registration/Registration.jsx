import './Registration.scss'
import {useState,useLayoutEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { CircularLoader } from '../CircularLoader/CircularLoader'

export const Registration = () => {

    const navigate = useNavigate()
    const [form,setForm] = useState({
        login:'',
        email:'',
        password:''
    })
    const [loading,setLoading] = useState(false)

    const onChangeHandler = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }

    const onRegisterHandler = async() => {
        setLoading(true)
        await axios.post('/api/auth/registration',{...form},{headers:{'Content-Type':'application/json'}})
        setLoading(false)
        navigate('/auth/login')
    }

    

    return(
        <form 
            onSubmit={e => e.preventDefault()}
            className="registration__form container">
            <h2 className="registration__title">Registration</h2>
                <input 
                    type="text"
                    name = 'login'
                    placeholder='Login'
                    value = {form.login}
                    onChange = {onChangeHandler}

                />
                <input 
                    type="email" 
                    name='email'
                    placeholder='Email'
                    value = {form.email}
                    onChange = {onChangeHandler}

                />
                <input 
                    type="password" 
                    name = 'password'
                    placeholder='Password'
                    value={form.password}
                    onChange = {onChangeHandler}
                />
                <div className="registration__controls">
                    <button 
                        onClick = {onRegisterHandler}
                        className="btn registration__btn">
                            Registration
                            { loading && <CircularLoader/>}
                        </button>
                    <Link to = '/auth/login'>Login</Link>
                </div>
        </form>
    )
}