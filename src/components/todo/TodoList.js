import React from 'react';

import { deleteTodo, makeImportant, makeDone, deleteAll, changeTodo } from '../../redux/reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { UilExclamation } from '@iconscout/react-unicons';
import { UilCheck } from '@iconscout/react-unicons';
import { UilPen } from '@iconscout/react-unicons';
import { UilSave } from '@iconscout/react-unicons';



const TodoList = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [editValue, setEditValue] = useState('')
    const todos = useSelector((store) => store.tasks.todos);

    return (
        <div>

           
            <ul id = 'list'>
                {
                    todos
                        .filter((item) => item.title.toLowerCase().includes(search.toLocaleLowerCase()))
                        .map((item) => (
                            <li className='listTodo' key={item.id}

                                style={{ margin: '20px 0', color: item.isImportance ? 'red' : '', textDecoration: item.isDone ? 'line-through' : '' }}>
                                {item.change ? (
                                    <input defaultValue={item.title} onChange={(e) => setEditValue(e.target.value)} type='text' />
                                ) : (
                                    item.title
                                )}
                              
                                <button className = 'mention_button button1' type='button'  onClick={() => dispatch(deleteTodo(item.id))}><UilTrashAlt/></button>
                                <button className = 'mention_button button2'  type='button'  onClick={() => dispatch(makeImportant(item.id))}><UilExclamation/></button>
                                <button  className = 'mention_button button3' type='button'  onClick={() => dispatch(makeDone(item.id))}><UilCheck /></button>
                                <button className = 'mention_button button4'  type='button' onClick={() => {
                                    dispatch(changeTodo(item.id, editValue, item.change))
                                    if (item.change) {
                                        setEditValue('')
                                    } else {
                                        setEditValue(item.title)
                                    }
                                }


                                }>{item.change ? <UilSave/> : <UilPen />}</button>
                              
                            </li>
                        ))
                }
            </ul>

            <div>
                <button className='deleteButton' type='button' onClick={() => dispatch(deleteAll())}>delete All</button>
            </div>
            <div><input id = "inputBx" value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder = 'Find you task'/></div>

        </div>
    )
}

export default TodoList
