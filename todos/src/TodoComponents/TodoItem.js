import React from 'react';
import {RemoveButton} from '../uielements/Button';
import {TodoListItem} from '../uielements/TodoListItemStyle';

export function TodoItem(props){
    console.log(props)
    return (
        <li className={props.item.status ? 'todolist__item complete' : 'todolist__item'}>
            <input onChange={() => props.handleItemStatusToggle(props.item.id)} checked={props.item.status}  type="checkbox" />
            <span>{props.item.text}</span>
            <RemoveButton onClick={() => props.handleItemRemove(props.item.id)}>x</RemoveButton>
        </li>
               
    )
    }