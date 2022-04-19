import { Fragment } from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import { Header } from "./components/Header/Header"
import {useRouter} from './routes/router'
import {AppContext} from './context/AppContext'
import {useAuth} from './hooks/auth.hook'

export default function App() {


    const {token,userId,login,logout,isReady} = useAuth()
    const isLogin = !!token;
    const router = useRouter(isLogin)

    const value = {
        token,userId,login,logout,isReady
    }

    return (
        <AppContext.Provider value = {value}>
            <Fragment>
                <Router>
                    <Header/>
                    {router}
                </Router>
            </Fragment>
        </AppContext.Provider>
    )
}