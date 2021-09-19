import React from 'react'
import Task from './Task'

const ListTask = ({tasklist,setselectedTask}) => {

    return (
        <div>
            {tasklist.map(task=><Task  setselectedTask={setselectedTask} task={task}></Task>)}
        </div>
    )
}

export default ListTask
