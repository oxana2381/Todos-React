import React from 'react';
import {RemoveButton} from '../uielements/Button';
import {TodoListItem} from '../uielements/TodoListItemStyle';

export function TodoItem(props){
    console.log(props)
    return (
        <TodoListItem>
                    < input onChange= {() => props.handleItemStatusToggle(props.item)} type="checkbox" />
                    <span className={props.item.status ? "complete" : ""}>{props.item.text}</span>
                    <RemoveButton>X</RemoveButton>
                </TodoListItem>
    )
    }