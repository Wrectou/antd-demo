import React, { Component } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export default class Header extends Component {
  render() {
    return (
      <Title level={3}>Todo List</Title>
    )
  }
}
