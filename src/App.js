import React, { Component } from 'react'
import { Card } from 'antd'
import Input from './components/Input'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component{

  state = {
    todos: [
      {id:'001', title:'吃饭', done:true},
      {id:'002', title:'睡觉', done:true},
      {id:'003', title:'敲代码', done:false},
    ]
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map(item => {
      if (item.id === id) return {...item, done}
      else return item
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(item => item.id !== id)
    this.setState({todos: newTodos})
  }

  checkAllTodos = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(item => {
      return {...item, done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(item => !item.done)
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return(
      <div className="app">
        <Header />
        <Card title={<Input addTodo={this.addTodo} />} style={{ width: 500 }}>
          <List updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={todos} />
          <Footer checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} todos={todos} />
        </Card>
      </div>
    )
  }
}