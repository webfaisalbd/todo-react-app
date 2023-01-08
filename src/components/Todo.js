import React, { useState } from 'react'
import { icons } from '../assets/data';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [add, setAdd] = useState([]);

    const setData = (e) => {
        setTodo(e.target.value);
    }

    const addItems = () => {
        setAdd([...add, todo]);
    }


    return (
        <>
            <div className='todoContainer'>
                <p className='text-center'>{icons}</p>
                <h2 className='text-center'>Write Your Todos Here</h2>

                <div className='inputForm'>
                    <div className='inputDiv'>
                        <input onChange={setData} value={todo} type="text" name="todo" placeholder='Enter Your Task' />
                        <Tooltip title="ADD">
                            <Button variant='contained' onClick={addItems}>
                                <AddIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo