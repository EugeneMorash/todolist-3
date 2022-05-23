import React from 'react';
import {ScheduleArrType} from "../App";

type Todolist3PropsType = {
    itemList: ScheduleArrType
    deleteItem: (id:number) => void
}

export function Todolist3(props:Todolist3PropsType) {

    const itemArray = props.itemList.map (item => {
        const deleteClickHandler = (id:number) => {
            props.deleteItem(id)
        }

        return (
            <li key={item.id}>
                <input type="checkbox" checked={item.isDone}/>
                <span>{item.item}</span>
                <button type='button' onClick={() =>{deleteClickHandler(item.id)}}>Delete!</button>
            </li>
        )
    })


    return (
        <div>
            <h3>Todolist V3</h3>
            <div>
                {itemArray}
            </div>

        </div>
    );
}