import {useState,useEffect,useCallback} from 'react'

export const useAuth = () => {
    const [token,setToken] = useState(null)
    const [userId,setUserId] = useState(null)


    const logIn = useCallback((jwtToken,userID) => {
        setToken(jwtToken)
        setUserId(userID)
        localStorage.setItem('userData',JSON.stringify({
            token:jwtToken,
            id:userID
        }))
    },[])

    const logOut = () => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        setToken(data.token)
        setUserId(data.id)
    },[logIn])


    return {
        token,
        userId,
        logOut,
        logIn
    }
}