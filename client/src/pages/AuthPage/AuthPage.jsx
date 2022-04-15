import {Fragment} from 'react'
import {Routes,Route} from 'react-router-dom'
//components
import {Registration} from '../../components/Registration/Registration'
import {Login} from '../../components/Login/Login'

export const AuthPage = () => {
    return (
        <Fragment>
            <Routes>
                <Route path = '/registration' element = {<Registration/>}/>
                <Route path = '/login' element = {<Login/>}/>
            </Routes>
        </Fragment>
    )
}