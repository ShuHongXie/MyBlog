
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getArticle } from '@/redux/action/article'
import { handleComp } from '@/redux/action/common'

import '@/static/compscss/nav.scss'

interface IProps {
  isPageArticle?: boolean,
  info?: any,
  category?: any,
  handleComp? : any
}

interface IState {
}


@connect(state => ({
  info: state.GetArticle.data && state.GetArticle.data.info ? state.GetArticle.data.info : '',
  category: state.GetArticle.data.category || []
}), {
  getArticle,
  handleComp
})
class Nav extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hanlde: false
    };
  }
  render(): JSX.Element {
    const { info, category } = this.props;
    return (
      <nav id='banner'>
        {
          !info.content ? (
            <>
              <h1>谢小谢のBlog</h1>
              <h3>My dream is to be a music producer.</h3>
              <div className='link_box'>
                <a href='https://github.com/ShuHongXie'><i className='iconfont icontwitter'></i></a>
                <a href='https://github.com/ShuHongXie'><i className='iconfont icongithub'></i></a>
                <a onClick={ () => this.props.handleComp({ search: true, black: true }) } href='javascript:;'><i className='iconfont iconsearch'></i></a>
              </div>
            </>
          ) : (
            <div className='article_box'>
              <h1>{ info.title }</h1>
              <div>
                <span className='time'>{ info.create_time }</span> | {
                  category.map((item, index) => {
                    return (
                      <a key={ item.id } href={ `/categories/${ item.name }/1` } className='category'>{ item.name }</a>
                    )
                  })
                  
                }
              </div>
              <div>
                <span>Word count: { info.content.length }</span> | <span>Reading time: { Math.floor( info.content.length/700 ) } min</span>
              </div>
            </div>
          )
        }
      </nav>
    )
  }
}

export default Nav