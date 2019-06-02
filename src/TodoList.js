import React, {Component} from 'react';
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {id:1, task:'prepare for interview', done:false},
                 {id:2, task:'cook food', done:false},
                 {id:3, task:'clean the home', done:false}
            ]
        }
    }
    onUpdate =  (id)=>{
    let updatedList= this.state.list.map(el=>{
         if (el.id===id){
             el.done = !el.done;
         }
        return el;
    });
        
        this.setState({list: updatedList});
            
        
    }
    getMaxId=()=>{
        let length= this.state.list.length;
        this.state.list.sort((a,b)=>{
            if (a.id>b.id) return 1;
            if (a.id<b.id) return -1;
        })
        return this.state.list[length-1].id;
    }
    onNewItemAdded= (newname)=>{
        let max = this.getMaxId()+1;
        let todo={id: max, done: false, task: newname};
        this.setState({list: [...this.state.list, todo]})
    }
    onDelete = (id)=>{
        
        let updatedlist = this.state.list.filter(el=>{
            return el.id !==id;
        })
        this.setState({list:updatedlist })
        
    }
    render(){
        return(
            <div>
       { this.state.list.map(todo=>(
             
             <TodoItem item={todo} onUpdate={this.onUpdate} key={todo.id} onDelete={this.onDelete}/>
            
        ))
    }
      <AddTodoItem onNewItemAdded={this.onNewItemAdded} />
     </div>
        )
    }
    
}

export default TodoList;