
import React, { Component } from 'react'
import Head from 'next/head'
import { getDomain } from '@/config/base'
import 'isomorphic-unfetch'

import Progress from '@/components/progress'
import Pagination from '@/components/pagination'

import { connect } from 'react-redux'
import { saveSidebarStatus } from '@/redux/action/common'
import { handleSidebar } from '@/util/common'

import '@/static/scss/archives.scss'

interface IProps {
  showSearch: boolean,
  list: Array<any>,
  total: number,
  pageNum: number,
  currentPage: string,
  pageSize: number,
  saveSidebarStatus: any,
  sidebarStatus: any
}

interface IState {
  
}

@connect(state => ({
  sidebarStatus: state.SidebarStatus
}), {
  saveSidebarStatus
})
class Archives extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      list: [{
        href: '/',
        title: 'electron入门'
      }]
    };
  }

  static async getInitialProps(context) {
    const { pageNum } = context.query;
    const res = await fetch(`${ getDomain() }/achives/${ pageNum }`);
    const json = await res.json()
    return {
      list: json.data.list,
      total: json.data.total,
      pageNum: json.data.pageNum,
      pageSize: json.data.pageSize,
      currentPage: pageNum
    }
  }

  componentDidMount(){
    // let { saveSidebarStatus } = this.props;
    // handleSidebar(document, true,() => {
    //   saveSidebarStatus(false);
    // })
  }
  
  render(): JSX.Element {
    const { list, total, pageNum, currentPage, pageSize } = this.props;
    return (
      <div id='archives'>
        <Head>
          <title>Archives | 谢小谢のBlog</title>
        </Head>
        <div className='cont'>
          <div className='archives_list_title'>Articles - { total }</div>
          <Progress data={ list } />
          <Pagination
          pageNumber={ pageNum }
          currentPage={ parseInt(currentPage) }
          hasDumpInput={ true }
          url={ '/archives' }
          cellNumber = { Math.ceil(total/pageSize) }
          />
        </div>
      </div>
    )
  }

  handle = (name: string) => {
    return name
  }
}

export default Archives