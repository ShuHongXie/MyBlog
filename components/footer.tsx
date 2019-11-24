
import React, { Component } from 'react';

import '@/static/compscss/footer.scss'

interface IProps {
  pvCount?: number,
  uvCount?: number
}

interface IState {
}

class Footer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hanlde: false
    };
  }
  render(): JSX.Element {
    const { pvCount, uvCount } = this.props;
    return (
      <footer>
        <div>©2019 By 谢小谢</div>
        <div>
          <i className='iconfont iconSeedling'></i><span>{ pvCount }</span> | 
          <i className='iconfont iconEnergy'></i><span>{ uvCount }</span>
        </div>
      </footer>
    )
  }
}

export default Footer