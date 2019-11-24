import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleComp } from '@/redux/action/common'
import Link from 'next/link'

import '@/static/compscss/header.scss'
import '@/static/scss/common.scss'

interface IProps {
  handleComp?: any,
  sidebarStatus?: boolean,
  saveSidebarStatus?: any
}

interface IState {
  showNav: boolean,
  inTop: boolean,
  navList: Array<{
    title: string,
    icon: string,
    url: string
  }>
}

@connect(state => ({
  sidebarStatus: state.SidebarStatus
}), {
  handleComp
})
// 头部组件
class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showNav: false,
      inTop: true,
      navList: [
        {
          title: 'Search ',
          icon: 'iconsousuo2',
          url: ''
        },
        {
          title: 'About ',
          icon: '',
          url: '/about'
        },
        {
          title: 'Archives ',
          icon: '',
          url: '/archives/1'
        },
        {
          title: 'Tag ',
          icon: '',
          url: '/tag'
        },
        {
          title: 'Categories ',
          icon: '',
          url: '/categories'
        }
      ]
    };
  }
  render() {
    const { navList, showNav, inTop } = this.state;
    return (
      <header id="header" className={ inTop ? 'cf top' : 'cf no_top'  }>
        <a className='header_title' href='/'>谢小谢のBlog</a>
        <div className={ showNav ? 'nav show' : 'nav noshow' }>
          {
            navList.map((item: any, index) => {
              return (
                <a href={ item.url } key={ item.title } onClick={ e => this.search(index, e) }  >
                  <i className={ `iconfont ${item.icon}` }></i>
                  <span>{ item.title }</span>
                </a>
              )
            })
          }
        </div>
        <i data-current="1" onClick={this.handleNav} className='iconfont iconlist list_icon'></i>
      </header>
    )
  }

  search = (idx, e) => {
    if(!idx) {
      if(e.preventDefault){
        e.preventDefault();
      }
      this.props.handleComp({ search: true, black: true }) ;
    }
  }

  handleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  componentDidMount() {
    const _this = this;
    document.body.addEventListener('click',(ev: any)=> {
      if(!ev.target.dataset.current) {
        _this.setState({
          showNav: false
        })
      }
    },true);
    // 监测滚动条
    window.addEventListener("scroll", () => {
      let scrollH: number = document.documentElement.scrollTop || document.body.scrollTop;
      let navNode = document.querySelector('#header') as HTMLElement;
      const { sidebarStatus } = this.props;
      if(scrollH > 0 ) {
        this.setState({
          inTop: false
        })
        if(sidebarStatus && document.body.clientWidth > 768) {
          navNode.style.maxWidth = 'calc( 100% - 300px )';
          // navNode.style.width = w - 300 + 'px';
        } else {
          navNode.style.width = '100%';
        }
      } else {
        navNode.style.width = '100%';
        navNode.style.maxWidth = '100%';
        this.setState({
          inTop: true
        })
      }
    })
  }
}

export default Header