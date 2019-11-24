// 剪刀样式组件
import React, { PureComponent } from 'react'
import '@/static/compscss/scissors.scss'

interface IProps {
  styles?: object
}

interface IState {
}

class Scissors extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      
    };
  }
  render(): JSX.Element {
    const { styles } = this.props;
    return (
      <div className='scissors'>
        <div></div>
        <i className={ styles ? `iconfont iconhuojian not_white` : `iconfont iconhuojian` }></i>
      </div>
    )
  }
}

export default Scissors


