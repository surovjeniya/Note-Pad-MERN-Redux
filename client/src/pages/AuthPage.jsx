import {Routes,Route,Navigate} from 'react-router-dom'
import {Login} from '../components/Login/Login'
import {Registration} from '../components/Registration/Registration'


export const AuthPage = () => {
    return (
        <Routes>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/registration' element = {<Registration/>}/>
            <Route path = '*' element = {<Navigate to='/auth/login' replace/>}/>
            <Route path = '*' element = {<Navigate to='/auth/registration' replace/>}/>
        </Routes>
    )
}