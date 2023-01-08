import React from 'react'

import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';

const List = ({ lists,deleteItems }) => {
  return (
    <div>
      {
        lists.map((list, index) => {
          return <div className='inputDiv' key={index}>
            <div className='singleList' >{list}</div>
            <Tooltip title="Delete" placement='right-end'>
              <Button variant='contained' color='error' onClick={()=> deleteItems(index)}>
                <DeleteForeverIcon />
              </Button>
            </Tooltip>
          </div>
        })
      }
    </div>
  )
}

export default List