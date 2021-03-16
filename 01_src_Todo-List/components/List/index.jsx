import React, { Component } from 'react'
import { List } from 'antd'
import Item from '../Item'

export default class CList extends Component {

  state = {
    localeObj: {
      emptyText: '欢迎使用Todo List，快来添加任务使用吧！'
    }
  }

  render() {
    const {localeObj} = this.state
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <List
        bordered
        dataSource={todos}
        locale={localeObj}
        renderItem={item => (
          <List.Item key={item.id}><Item updateTodo={updateTodo} deleteTodo={deleteTodo} {...item}/></List.Item>
        )}
      />
    )
  }
}
