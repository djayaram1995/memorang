import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get('http://localhost:3500').then(res=> {
       this.setState({data :res.data})
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
           <tr draggable={true}  onDragStart={e => this.onDragStart(e,idx)} onDragOver={() => this.onDragOver(idx)} key={res.id}>
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

export default App;
