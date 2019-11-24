import React, { Component } from 'react'

interface IProps {
  showSearch: boolean
}

interface IState {
}

class Black extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      
    };
  }
  render(): JSX.Element {
    return (
      <div className='black'></div>
    )
  }
}

export default Black