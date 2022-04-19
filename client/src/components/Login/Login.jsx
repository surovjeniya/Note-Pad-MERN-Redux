import './Login.scss'
import {useState,useContext,useLayoutEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {AppContext} from '../../context/AppContext'
import { CircularLoader } from '../CircularLoader/CircularLoader'



export const Login = () => {

    const navigate = useNavigate()
    const {login} = useContext(AppContext)
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const [loading,setLoading] = useState(false)

    const onChangeHandler = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }

    const onLoginHandler = async() => {
        setLoading(true)
        const res = await axios.post('/api/auth/login',{...form},{headers:{'Content-Type':'application/json'}})
        login(res.data.token,res.data.userID)
        setForm({
            email:'',
            password:''
        })
        setLoading(false)
        navigate('/')
    }

    
    return(
        <form 
            onSubmit={e => e.preventDefault()}
            className="login__form container">
            <h2 className="login__title">Log in</h2>
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
                <div className="login__controls">
                    <button className="btn login__btn" onClick = {onLoginHandler}>
                        Login
                        { loading && <CircularLoader/>}
                    </button>
                    <Link to = '/auth/registration'>Registration</Link>
                </div>
        </form>
    )
}