import React, { Component } from 'react'
import { Checkbox, Button } from 'antd'
import item from './index.module.css'

export default class Item extends Component {

  state = {
    move: false
  }

  handleMouseEnter = () => {
    this.setState({move: true})
  }

  handleMouseLeave = () => {
    this.setState({move: false})
  }

  checkBoxChange = (e) => {
    const {id,updateTodo} = this.props
    const {checked} = e.target
    updateTodo(id, checked)
  }

  handleDelete = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,title,done} = this.props
    const {move} = this.state
    return (
      <div className={item.item} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Checkbox checked={done} onChange={this.checkBoxChange}/>
        <span className={item.title}>&emsp;{title}</span>
        <Button className={move ? item.showButton : ''} danger size="small" onClick={this.handleDelete(id)}>删除</Button>
      </div>
    )
  }
}
