import {useState,useEffect,useCallback} from 'react'

export const useAuth = () => {
    const [token,setToken] = useState(null)
    const [userId,setUserId] = useState(null)
    const [isReady,setIsReady] = useState(false)

    const login = useCallback((userToken,userid) => {
        setToken(userToken)
        setUserId(userid)
        localStorage.setItem('userData',JSON.stringify({
            token:userToken,
            userId:userid
        }))
    },[])
    
    const logout = () => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if(data && data.userId) {
            login(data.token,data.userId)
        }
        setIsReady(true)
    },[login])


    return {token,userId,login,logout,isReady}


}