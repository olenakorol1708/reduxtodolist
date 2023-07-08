import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/tasks';
const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  return (
    <div>
            <form>
        <input id = "inputBx"
          type="text"
          placeholder="Enter your tasks...."
          value={text} 
          onChange = {(e)=>setText(e.target.value)}/>
        <button className = 'addButton' type="button"  onClick = {()=>{
 dispatch(addTodo(text))
 setText('')
        }
           }>Add your task</button>
      </form>
     
    </div>
  )
}

export default Header
