import React, { Component } from 'react'
import { Checkbox, Button } from 'antd'
import footer from './index.module.css'

export default class Footer extends Component {

  checkBoxChange = (e) => {
    this.props.checkAllTodos(e.target.checked)
  }

  handleClear = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const total = todos.length
    const doneCount = todos.reduce((pre, item) => pre += (item.done ? 1 : 0), 0)
    return (
      <div className={footer.footerBox}>
        <div className={footer.check}>
          <Checkbox onChange={this.checkBoxChange} checked={doneCount === total && total !== 0} />
          &nbsp;
          已完成{doneCount} / 全部{total}
        </div>
        <Button type="primary" danger onClick={this.handleClear}>清除已完成任务</Button>
      </div>
    )
  }
}
