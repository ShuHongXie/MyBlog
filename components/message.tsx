import React, { Component } from 'react'

import '@/static/compscss/message.scss'

interface IProps {
  type?: string,
  info?: string,
  status?: boolean
}

interface IState {
}

class Message extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      
    };
  }
  
  render(): JSX.Element {
    let { type, info, status } = this.props;
    type = type || 'success';
    info = info || '示例';
    status = status || false;
    return (
      <div className={ `message ${ status ? 'show' : 'hide' }` }>
        <span className={ type }>{ info }</span>
      </div>
    )
  }
}

export default Message