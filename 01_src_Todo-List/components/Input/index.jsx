import React, { Component } from 'react'
import { Input, message } from 'antd'
import { nanoid } from 'nanoid'

export default class CInput extends Component {

  clearInpueValue = React.createRef()

  handleEnter = (e) => {
    const {keyCode,target} = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') return message.error('请输入标题，再添加待办事项！')
    const todoObj = {id:nanoid(), title:target.value.trim(), done:false}
    this.props.addTodo(todoObj)
    // e.target.value = ''    // 在antd的Input组件里面使用不生效，需要设置Input组件的state
    const clearInpueValue = this.clearInpueValue.current
    clearInpueValue.setState({value:''})
  }

  render() {
    return (
      <Input ref={this.clearInpueValue} onPressEnter={this.handleEnter} placeholder="请输入待办事项，按回车键确认" />
    )
  }
}
