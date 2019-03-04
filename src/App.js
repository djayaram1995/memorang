import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { taskListAction } from './action/TaskListAction';
class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    this.props.taskListFetch([]);
    axios.get('http://localhost:3500').then(res=> {
        this.setState({data :res.data})
        this.props.taskListFetch(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  onDragStart = (e,idx) => {
  this.draggedItem = this.state.data[idx];
  e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
  };
  onDragOver = index => {
    const draggedOverItem = this.state.data[index];
   if (this.draggedItem === draggedOverItem) {
      return;
    }
    let items = this.state.data.filter(item => item !== this.draggedItem);
    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);
    console.log("items",items)
    this.setState({ data: items });
  };
  render() {
    console.log(this.props.task)
    return (
      <div className="App">
        <h1>
          TODO LIST
        </h1>
        <table>

        
        <thead>
        <tr>
        <td>id</td>
        <td>task</td>
        <td>priority</td>
        </tr>
        </thead>
        
        <tbody>
          
        {
          this.state.data.map((res,idx) => (
           <tr draggable={true}  onDragStart={e => this.onDragStart(e,idx)} onDragOver={() => this.onDragOver(idx)} key={res.id} onDragEnd={()=>this.draggedItem = null}>
              <td>
                {res.id}
              </td>
              <td>
                {res.task}
              </td>
              <td>
                {res.priority}
              </td>
              </tr>
              
            
          )         
          )
        }
        
        </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
    task : state
}),{taskListFetch: taskListAction} )(App);
