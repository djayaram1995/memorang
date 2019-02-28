import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get('http://localhost:3500').then(res=> {
      console.log(res.data);
      this.setState({data :res.data})
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    console.log(this.state.data)
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
        
        <tbody onDrop ={() => {console.log("guru")}}>
          
        {
          this.state.data.map(res => (
           <tr key={res.id} draggable={true} >
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
