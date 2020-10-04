import React,{useState, useEffect} from 'react';
import  Todo from './Todo'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css'
import db from './firebase'
import firebase from 'firebase'



function App() {
  const[todos,setTodos]=useState([''])
  const[input,setInput]=useState('')

//when the app loads ,we need to listen to firebase db and fetch new todo-use effect
  useEffect(()=>{
 db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
  // console.log(snapshot.docs.map(doc=>{id:doc.id,todo:doc.data()}));
   setTodos(snapshot.docs.map(doc=>({ id:doc.id,todo:doc.data().todo})))

 })
  },[]);

  const addTodo=(event)=>
  {
    event.preventDefault()
    db.collection('todos').add(
    {todo:input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }
    )
    setTodos([...todos,input])
    setInput('')//clear nput
    console.log('clicked')

  }
  
  return (
    <div className="App">
      <h1>Hello React Lovers</h1>
      <form>
      {/* <input value={input} onChange={event=>setInput(event.target.value)}></input> */}
      <FormControl>
        <InputLabel>Write a TODO</InputLabel>
        <Input value={input} onChange={event=>setInput(event.target.value)}></Input>

      </FormControl>
      <Button  disabled={!input}type="submit" onClick={addTodo}variant="contained" color="primary">Todo</Button>
      {/* <button type="submit" onClick={addTodo}>Todo</button> */}
      </form>
      
      <ul>
        {
          todos.map(todo=>(
            <Todo text={todo}/>
         // <li>{todo}</li>
          ))}
            

      </ul>
    </div>
  );
}

export default App;
