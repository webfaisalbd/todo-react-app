import React, { useState } from 'react'

import List from '../components/List';

import { icons } from '../assets/data';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [add, setAdd] = useState([]);
    const [validation, setValidation] = useState('');

    const setData = (e) => {
        setTodo(e.target.value);
    }

    const addItems = () => {

        if (todo === '') {
            setValidation("Please! Enter Your Todo");
        } else {
            setValidation("");
            
            setAdd([...add, todo]);
            setTodo("");
        }

    }

    const deleteItems = (index) => {
        // console.log(index);
        const filtered = add.filter((el, ind) => {
            return ind !== index;
        })
        setAdd(filtered);

    }


    return (
        <>
            <div className='todoContainer'>
                <p className='text-center'>{icons}</p>
                <h2 className='text-center'>Write Your Todos Here</h2>
                {
                    validation && <h3 className='text-center warning'>{validation}</h3>
                }


                <div className='inputForm'>
                    {/* input and button  */}
                    <div className='inputDiv'>
                        <input onChange={setData} value={todo} type="text" name="todo" placeholder='Enter Your Task' />
                        <Tooltip title="ADD" placement='right-end'>
                            <Button variant='contained' onClick={addItems}>
                                <AddIcon />
                            </Button>
                        </Tooltip>
                    </div>

                    {/* show data  */}
                    <div className='listContainer'>
                        <List lists={add} deleteItems={deleteItems} />
                    </div>

                </div>



            </div>
        </>
    )
}

export default Todo