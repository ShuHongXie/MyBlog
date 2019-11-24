import React, { Component } from 'react'
import 'isomorphic-unfetch'
import { getDomain } from '@/config/base'
import Head from 'next/head'

import { connect } from 'react-redux'
import { saveSidebarStatus } from '@/redux/action/common'
import { handleSidebar } from '@/util/common'

import '@/static/scss/tag.scss'

interface IProps {
  list: Array<{
    name: string,
  }>,
  saveSidebarStatus: any,
  sidebarStatus: any
}

interface IState {
  // tab: Array<{
  //   name: string,
  //   url: string
  // }>
}

@connect(state => ({
  sidebarStatus: state.SidebarStatus
}), {
  saveSidebarStatus
})
class Tags extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      
    };
  }
  static async getInitialProps() {
    const res = await fetch(`${ getDomain() }/blog/tags`);
    const json = await res.json()
    return {
      list: json.data.list
    }
  }

  componentDidMount(){
    let { saveSidebarStatus } = this.props;
    handleSidebar(document, true,() => {
      saveSidebarStatus(false);
    })
  }

  render(): JSX.Element {
    const { list } = this.props;
    return (
      <div id='tag'>
        <Head>
          <title>Tag | 谢小谢のBlog</title>
        </Head>
        <div className='cont'>
          <div className="title">Tag - { list.length }</div>
          <div>
            {
              list.map((item, idx) => {
                return ( 
                  <a href={ `/tag/${ item.name }/1` } key={ idx }  >{ item.name }</a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Tags