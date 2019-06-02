import React, {Component} from 'react';

class AddTodoItem extends Component{
    constructor(props){
        super(props);
        this.state={newitem:''}
    }
    handlesubmit=(ev)=>{
        ev.preventDefault();
       
        this.props.onNewItemAdded(this.state.newitem);
        this.setState({newitem:''})
    }
    onChange = (ev)=>{
        this.setState({
            newitem: ev.target.value
        })
    }
    render(){
        return(
          <form onSubmit={this.handlesubmit}>
            <input type="text" className="add-item" onChange={this.onChange} value={this.state.newitem}/>
            </form>
        )
    }
}

export default AddTodoItem;