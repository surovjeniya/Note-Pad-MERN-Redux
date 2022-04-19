import { Fragment} from "react"
import {NoteList} from '../components/NoteList/NoteList'
import {TagFilter} from '../components/TagFilter/TagFilter'

export const MainPage = () => {

    

    return (
        <Fragment>
            <div className="container">
                <TagFilter/>
                <NoteList/>
            </div>
        </Fragment>
    )
}