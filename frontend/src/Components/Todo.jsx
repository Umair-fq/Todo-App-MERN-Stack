import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { RiCrossFill } from 'react-icons/ri'; // Corrected icon import (if applicable)
import axios from 'axios'
import { baseUrl } from '../utils/constants';
import './Todo.css'

const Todo = ({ value, id, onDelete, onUpdate}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(value);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        onUpdate(id, newName);
        setIsEditing(false);
    }
    
    return (
        <div className="todo">
            { isEditing ?
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                :
                value
            }
            <div className="icons">
                {isEditing  ? 
                    <button onClick={handleSave}>Save</button>
                    :
                    <AiFillEdit onClick={handleEdit} className='icon'></AiFillEdit>
                }
                <RiCrossFill onClick={() => onDelete(id)} className='icon' />
            </div>
        </div>
    )
}

export default Todo
