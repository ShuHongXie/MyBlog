import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleComp } from '@/redux/action/common'

import '@/static/compscss/black.scss'

interface IProps {
  allHandleState?: object,
  handleComp?: any
}

interface IState {
}

@connect(state => ({
  allHandleState: state.HandleComp
}), {
  handleComp
})
class Black extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      
    };
  }
  render(): JSX.Element {
    return (
      <div id='black' onClick={ this.close }></div>
    )
  }
  // 关闭所有公用组件
  close = () => {
    const { allHandleState } = this.props;
    for(let i in allHandleState) {
      allHandleState[i] = false;
    }
    this.props.handleComp(allHandleState)
  }
}

export default Black