import {Routes,Route,Navigate} from 'react-router-dom'
import { AuthPage } from '../pages/AuthPage'
import {CreateNotePage} from '../pages/CreateNotePage'
import {MainPage} from '../pages/MainPage'


export const useRouter = (isLogin) => {
    if(!isLogin) {
        return (
            <Routes>
                <Route path='/auth/*' element = {<AuthPage/>}/>
                <Route path='*' element = {<Navigate to='/auth/' replace/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/' element = {<MainPage/>}/>
                <Route path='/create' element = {<CreateNotePage/>}/>
                <Route path='*' element = {<Navigate to='/' replace/>}/>
                <Route path='*' element = {<Navigate to='/create' replace/>}/>
            </Routes>
        )
    }
}