import React from 'react';
const TodoItem = ({item, onUpdate,onDelete})=>{
    
    const getClasses = ()=>{
        if(item.done){
            return 'todo-item todo-item-complete'
        }
        else return 'todo-item'
    }
    const removeItem =()=>{
     onDelete(item.id)
    }
    return(
    <div className={getClasses()}>
        <input  type="checkbox" value={item.done} onChange={()=>onUpdate(item.id)}/> {item.task}
        <button className="remove-button" onClick={removeItem}>X</button>
        </div>
    
    )
}
export default TodoItem;
