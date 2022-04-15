import {Routes,Route} from 'react-router-dom'


export const useRoutes = (isLogin) => {
    if(isLogin) {
        return (
            <Routes>
                <Route/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route/>
                <Route/>
            </Routes>
        )
    }
}

