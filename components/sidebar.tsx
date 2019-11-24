import React, { Component } from 'react'
import { connect } from 'react-redux'
import MarkNav from 'markdown-navbar'
import { saveSidebarStatus } from '@/redux/action/common'
import { getDomain } from '@/config/base'

import '@/static/compscss/sidebar.scss'
import '@/static/compscss/markdown-nav.scss'

import Scissors from './scissors'

interface IProps {
  sidebarStatus?: boolean,
  data?: any,
  articleInfo?: any,
  saveSidebarStatus?: any
}

interface IState {
  scissorsStyle: object,
  toggleStatus: boolean,
  toggleText: string,
  writePercent: number,
  localHref: string
}

@connect(state => ({
  sidebarStatus: state.SidebarStatus,
  articleInfo: state.GetArticle
}),{
  saveSidebarStatus
})
class Sidebar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      toggleStatus: false,
      toggleText: 'Toggle article',
      writePercent: 0,
      localHref: '',
      scissorsStyle : { // 剪刀组件的样式
        backgroundColor: '#fae8f6!important'
      },
    };
  } 

  render(): JSX.Element {
    const { sidebarStatus, data, articleInfo } = this.props;
    const { scissorsStyle, toggleStatus, toggleText, writePercent, localHref } = this.state;
    return (
      <div className={ `sidebar cf ${sidebarStatus ? 'open' : 'close'}` }>
        {
          localHref.indexOf("/article/") != -1 ? (
            <>
              <div className="toggle_box">
                <div className="btn" onClick={ this.toggle }>{ toggleText }</div>
                <Scissors styles={ scissorsStyle } />
              </div>
              <div className={`user ${ toggleStatus ? 'show' : 'hide' } `}>
                <div>
                  <img src={ data && data.avatar ? `${getDomain()}${data.avatar}` : '' } alt="avator" />
                </div>
                <span>{ data && data.name }</span>
                <span>{ data && data.title }</span>
                <a href={ data && data.follow } className="follow">Follow Me</a>
                <Scissors styles={ scissorsStyle } />
                <div className="item">
                  <a href="/archives/1" >Articles<span>{ data.articleCount }</span></a>
                  <a href="/tag" >Tags<span>{ data.tagCount }</span></a>
                  <a href="/categories" >Categories<span>{ data.categoryCount }</span></a>
                </div>
                <Scissors styles={ scissorsStyle } />
                <span className="links">Links</span>
                <div className="other_links cf">
                  <a href={ data && data.follow }>ShuHongXie</a>
                </div>
              </div>
              {/* <div className="article_progress"></div> */}
              <div className={`catalog ${ toggleStatus ? 'hide' : 'show' }`}>
                <span>Catalog</span>
                <div className="progress">You've read { writePercent }%<div></div></div>
                <MarkNav
                  className="article-menu"
                  source={ articleInfo.data && articleInfo.data.info.content || '' }
                  headingTopOffset={0}
                />
              </div>
            </>
          ) : (
            <div className='user' >
              <div>
                <img src={ data && data.avatar ? `${getDomain()}${data.avatar}` : '' } alt="avator" />
              </div>
              <span>{ data && data.name }</span>
              <span>{ data && data.title }</span>
              <a href={ data && data.follow } className="follow">Follow Me</a>
              <Scissors styles={ scissorsStyle } />
              <div className="item">
                <a href="/archives/1" >Articles<span>{ data.articleCount }</span></a>
                <a href="/tag" >Tags<span>{ data.tagCount }</span></a>
                <a href="/categories" >Categories<span>{ data.categoryCount }</span></a>
              </div>
              <Scissors styles={ scissorsStyle } />
              <span className="links">Links</span>
              <div className="other_links cf">
                <a href={ data && data.follow }>ShuHongXie</a>
              </div>
            </div>
          )
        }
        
      </div>
    )
  }

  toggle = () => {
    this.setState({
      toggleStatus: !this.state.toggleStatus
    })
  }

  scorollPercent = () => {
    this.setState({
      writePercent: parseInt((((document.documentElement.scrollTop) / (document.body.scrollHeight - this.client().height)) * 100).toFixed(2))
    })
  }

  componentDidMount() {
    this.setState({
      localHref: window.location.href
    })
    document.addEventListener('scroll',() => {
      this.scorollPercent();
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scorollPercent);
  }

  client() {
    if(window.innerHeight !== undefined){
      return {
        "width": window.innerWidth,
        "height": window.innerHeight
      }
    }else if(document.compatMode === "CSS1Compat"){
      return {
        "width": document.documentElement.clientWidth,
        "height": document.documentElement.clientHeight
      }
    }else{
      return {
        "width": document.body.clientWidth,
        "height": document.body.clientHeight
      }
    }
  }

  
}

export default Sidebar