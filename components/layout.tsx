import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Nav from '@/components/nav'

import { connect } from 'react-redux'
import { saveSidebarStatus } from '@/redux/action/common'
import { saveAuthor } from '@/redux/action/author'
import { CSSTransition } from 'react-transition-group'
import { handleSidebar, initSnowflake } from '@/util/common'
// import { initMouseClick } from '@/util/click'

import dynamic from 'next/dynamic'

const Search = dynamic(import('@/components/search'));
const Black = dynamic(import('@/components/Black'));
const Sidebar = dynamic(import('@/components/Sidebar'));
const Message = dynamic(import('@/components/Message'));

import '@/static/scss/transition.scss'
import '@/static/compscss/layout.scss'

interface IProps {
  showSearch: boolean,
  showBlack: boolean,
  saveSidebarStatus: any,
  saveAuthor: any,
  data: any,
  sidebarStatus: any,
  messageInfo: string,
  messageStatus: boolean,
  messageType: string
}

interface IState {
  tran: boolean,
  showSidebar: boolean
}

@connect(state => ({
  showSearch: state.HandleComp.search,
  showBlack: state.HandleComp.black,
  sidebarStatus: state.SidebarStatus,
  messageInfo: state.MessageStatus.data && state.MessageStatus.data.info,
  messageStatus: state.MessageStatus.data && state.MessageStatus.data.status,
  messageType: state.MessageStatus.data && state.MessageStatus.data.type
}), {
  saveSidebarStatus,
  saveAuthor
})
class Layout extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tran: false,
      showSidebar: true
    };
  }

  componentDidMount() {
    if(document.body.clientWidth < 768 ){ this.setState({ showSidebar: false }) }
    const { data, saveAuthor } = this.props;
    saveAuthor({
      name: data.name
    });
    this.setState({
      tran: true
    })

    // 初始化雪花
    initSnowflake();

    // 初始化鼠标点击
    // initMouseClick();

  }; 
  

  render(): JSX.Element {
    const { showSearch, showBlack, children, data, sidebarStatus, messageInfo, messageType, messageStatus } = this.props;
    const { tran, showSidebar } = this.state;
    return (
      <div className="layout">
        <Header />
        <Nav isPageArticle={ showSidebar }  />
        { showSidebar ? <Sidebar data={ data } /> : null }
        <CSSTransition
          in={ showSearch }
          classNames="search"
          timeout={ 200 }
        >
          <Search />
        </CSSTransition>
        <CSSTransition
          in={ showBlack }
          classNames="fade"
          timeout={ 200 }
        >
          <Black />
        </CSSTransition>
        <CSSTransition
          in={ tran }
          classNames="cont"
          timeout={ 500 }
        >
          <div className="container"> 
            { children }
          </div>
        </CSSTransition>
        <Message
          info={ messageInfo }
          type={ messageType }
          status={ messageStatus }
        />
        <canvas id="canvas"></canvas>
        {/* <canvas id="mineCanvas" ></canvas> */}
        <i 
          onClick={ this.handleSidebar } 
          className={ sidebarStatus  ? 'iconfont iconright show_sidebar_icon open' : 'iconfont iconright show_sidebar_icon' }
        ></i>
        <i onClick={ this.toTop } className="iconfont icontop to_top"></i>
        <Footer pvCount={ data && data.visitCount } uvCount={ data && data.uvCount } />
      </div>
    )
  }

  handle = (name: string) => {
    return name
  }

  // 展示sidebar
  handleSidebar = () => {
    let { sidebarStatus, saveSidebarStatus } = this.props;
    handleSidebar(document, sidebarStatus,() => {
      if(!sidebarStatus) {
        saveSidebarStatus(true);
      } else {
        saveSidebarStatus(false);
        let navNode = document.querySelector('#header') as HTMLElement;
        navNode.style.maxWidth = '100%';
      }
    })
  }
  // 点击滚动到最上方
  toTop = () => {
    let scrollH: number = document.documentElement.scrollTop || document.body.scrollTop;
    let timer = setInterval(()=> {
      scrollH -= 16;
      if(scrollH > 0) {
        window.scrollTo(0,scrollH)
      } else {
        window.scrollTo(0,0);
        clearInterval(timer);
      }
    }, 10);
  }

  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = () => {
        return;
    }
  }
}


export default Layout