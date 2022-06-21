import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'add a new todo...',
      itemList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.state.itemList.push(this.state.value);
    this.setState({ value: '', itemList: this.state.itemList, });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className='text'>
          <h1>please click the following  button can delete  點擊下面的按鈕可以刪除</h1></div>
        <form onSubmit={this.handleSubmit}>
          <label className='name' >CGU ToDoList</label>
          <input className='bor' type="text" value={this.state.value} onChange={this.handleChange} />

          <input className='input' type="submit" value="add" />
        </form>
        <ul style={{ textAlign: 'left' }}>
          {
            this.state.itemList.map((item, index) => {
              return <li key={index}>{item}
                {<div>
                  {<div class="Right_Button"><button onClick={this.btndel.bind(this, index)}>delete</button></div>}
                </div>}
              </li>
            })
          }
        </ul>
      </div>
    );
  }

  btndel(index) {

    const l = [...this.state.itemList];
    l.splice(index, 1);

    this.setState({
      itemList: l
    })

  }
}
export default App