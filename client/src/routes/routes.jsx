import {Routes,Route,Navigate} from 'react-router-dom'
//pages
import {AuthPage} from '../pages/AuthPage/AuthPage'
import {MainPage} from '../pages/MainPage/MainPage'
import {CreatePostPage} from '../pages/CreatePostPage/CreatePostPage'


export const useRoutes = (isLogin) => {
    if(isLogin) {
        return (
            <Routes>
                <Route path='/' element = {<MainPage/>} />
                <Route path='/create-post' element = {<CreatePostPage/>} />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/auth/*' element = {<AuthPage/>} />
                <Route path = '*' element = {<Navigate to='/auth/login' replace/>}/>
                <Route path = '*' element = {<Navigate to='/auth/registration' replace/>}/>
            </Routes>
        )
    }
}

