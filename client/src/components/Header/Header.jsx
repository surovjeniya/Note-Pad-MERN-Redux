import './Header.scss'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const Header = () => {

    const {token,logout} = useContext(AppContext)


    return (
        <nav>
            <div className="nav-wrapper container">
            <Link to='/' className="brand-logo">Notes app</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/create'>Create note</Link></li>
                <li><Link to='/'>Notes</Link></li>
                {
                    token && <li><button className="btn" onClick = {logout}>Log out</button></li>
                }
            </ul>
            </div>
        </nav>
    )
}