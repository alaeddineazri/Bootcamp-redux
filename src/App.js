
import { useRef, useState,useEffect  } from 'react';
import { Form ,Button, DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ListTask from './components/ListTask';
import { addTask, handelfilter,updateToDo } from './Redux/Actions/actions';



function App() {

const tasklist = useSelector(state => state.tasks)
const filtre = useSelector(state => state.filter)
const dispatch = useDispatch()
 const discrption = useRef()
const [selectedTask, setselectedTask] = useState(null)

useEffect(()=>{ 
  if (selectedTask) discrption.current.value=selectedTask.discrption
},[selectedTask])


const handelAddTask = ()=>{

  dispatch(addTask(discrption.current.value))
   discrption.current.value=''
 }

const editTask = ()=>{
  const newTask={...selectedTask,discrption:discrption.current.value}
  console.log("newTask",newTask)
  dispatch(updateToDo(newTask))
  discrption.current.value=''
 }


const filtreliste =()=>{ 
  switch (filtre) {
    case "undone":
      return  tasklist.filter(elm => elm.isDone ===false )
    case "done":
      return  tasklist.filter(elm => elm.isDone ===true )
    default:
    return tasklist
  }

 }

  return (<>
  
  
  <div className="App">
  <h1 style={{ padding: '10px', color : 'red' }} >Tasks List App</h1>
  <Container style={{ padding: '10px'}} >
  <Row>
    <Col>
      <Form.Control size="lg" ref={discrption} type="text"placeholder="New Task" />
    </Col>
    <Col>
      <Button onClick={handelAddTask} variant="primary">Add</Button>
      <Button onClick={()=>editTask()} variant="info">Update</Button>
    </Col>
    <Col>
    <DropdownButton id="dropdown-basic-button" title="Sort By">
        <Dropdown.Item onClick ={()=>dispatch(handelfilter("all"))}>All</Dropdown.Item>
        <Dropdown.Item onClick ={()=>dispatch(handelfilter("undone"))}>Undone</Dropdown.Item>
        <Dropdown.Item onClick ={()=>dispatch(handelfilter("done"))}>Done</Dropdown.Item>
      </DropdownButton>
    </Col>
  </Row>
</Container>
    <ListTask editTask={editTask} setselectedTask={setselectedTask} tasklist={filtreliste()}></ListTask>
    
    </div>
    </>
  );
}

export default App;
