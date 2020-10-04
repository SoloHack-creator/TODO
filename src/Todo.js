
import React ,{useState}from 'react'
import './Todo.css'
import { List, ListItem, ListItemText,Input } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import db from './firebase'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
        background: 'red',
        
        borderRadius: 3,
        color: 'black',
       
        float:'left'

      },
      rootDelete: {
      
        border: 100,
         borderRadius: 300,
        padding: '10px 15px ',
        float:'left'

      },

      rootModal: {
        background: 'paleturquoise',
        color: 'black',
        border: 100,
       
       padding: '10px 15px ',
       
        float:'left'

      },
      
  }));

  

function Todo(props) {

    const [open,setOpen]=useState(false)
    const[input,setInput]=useState('')
    const classes=useStyles();
    
    const updateTodo=()=>{
        db.collection('todos').doc(props.text.id).set({todo:input},
            {merge:true});

            setOpen(false)

    }    
    console.log(`inside new ${props}`);
    return (
       <>
        <Modal
        open={open}
        onClose={e=>{setOpen(false)}}
        >
            <div className={classes.paper}>
               
                <Input  placeholder ={props.text.todo} value={input} onChange={event=>setInput(event.target.value)}></Input>
                <Button className={classes.rootModal} onClick={updateTodo} variant="raised" color="primary">Update Todo</Button>
            </div>

        </Modal>
        <List>
           
            <ListItem>
            
             <ListItemText secondary="TODO" primary={props.text.todo}></ListItemText>
         
           </ListItem>

           <Button className={classes.root} variant="raised" onClick={e=>{setOpen(true)}}>Edit</Button>
           
           <DeleteSweepIcon className={classes.rootDelete}   variant="raised" onClick={(event)=>db.collection('todos').doc(props.text.id).delete()}>Delete</DeleteSweepIcon>
          
           </List>
           </>
      
    )
}

export default Todo
//rfce-react functional component export