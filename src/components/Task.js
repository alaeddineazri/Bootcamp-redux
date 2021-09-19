import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, toogle } from '../Redux/Actions/actions'

const Task = ({task,setselectedTask}) => {

    const dispatch = useDispatch()
    return (

        <Container style={{ padding: '10px'}}>
        <Row style={{ padding: '10px',border:'solid 3px white'}}>
      
            <Col style={{ color: 'white'}}>{task.discrption }</Col>
            <Col><Button onClick={()=>dispatch(toogle(task.id)) } variant={task.isDone?'success':'warning'}>{task.isDone?'done':'undone'}</Button>
            <Button onClick={()=>dispatch(deleteTask(task.id))} variant="danger">delete</Button>
            <Button onClick={()=>setselectedTask(task)} variant="info">Edit</Button></Col>
        </Row>
        </Container>

        
    )
}

export default Task
