import React, {useState} from 'react';
import {Todolist3} from "./components/Todolist3";

export type ScheduleArrType = Array<ScheduleType>
export type ScheduleType = {
    id: number
    item: string
    isDone: boolean
}

const schedule: ScheduleArrType = [
    {id: 101, item: "Waking up", isDone: true},
    {id: 102, item: "Exercise", isDone: false},
    {id: 103, item: "Washing", isDone: false},
    {id: 104, item: "Breakfast", isDone: true},
    {id: 105, item: "Lazy time", isDone: true},
    {id: 106, item: "Lunch", isDone: true},
    {id: 107, item: "Horse racing", isDone: false},
    {id: 108, item: "Afternoon tea", isDone: true},
    {id: 109, item: "Snooker", isDone: true},
    {id: 110, item: "Dinner", isDone: true},
    {id: 111, item: "Cigar time", isDone: true},
    {id: 112, item: "Washing", isDone: false},
    {id: 113, item: "Putting to bed", isDone: true}
]

function App() {

    const [item, setItem] = useState(schedule)

    const deleteItem = (id: number) => {
        setItem(item.filter(itm => itm.id !== id))
    }



  return (
    <div>
        <Todolist3 itemList={item} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
