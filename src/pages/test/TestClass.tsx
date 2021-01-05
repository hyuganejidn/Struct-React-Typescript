import React, { Component } from 'react'

interface Props {
  test: number
}
interface State {
  count: number
  testState: number
}

export class TestClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 1,
      testState: 1,
    }
  }

  state = {
    count: 0,
    testState: 0,
  }

  componentDidMount() {
    console.log(this.state, 123)
  }
  render() {
    return <div>testClass</div>
  }
}
