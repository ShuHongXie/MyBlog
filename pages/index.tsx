
import React, { Component } from 'react'
import { getDomain } from '@/config/base'
import Head from 'next/head'
import List from '@/components/List'
import Paginations from '@/components/paginations'

import '@/static/scss/index.scss'

interface IProps {
  showSearch: boolean,
  list: Array<any>,
  pageNum: number,
  pageSize: number,
  total: number
}

interface IState {
  list: Array<any>
}

class Index extends Component<IProps, IState> {
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
    let { pageNum } = context.query;
    pageNum ? null : pageNum = 1;
    const res = await fetch(`${ getDomain() }/article?pageNum=${ pageNum }`);
    const json = await res.json()
    return {
      list: json.data.list,
      total: json.data.total,
      pageNum: json.data.pageNum,
      pageSize: json.data.pageSize,
      currentPage: pageNum
    }
  }
  
  render(): JSX.Element {
    const { list, pageNum, total, pageSize } = this.props;
    return (
      <div id='index'>
        <Head>
          <title>My Dream is to be a music producer</title>
        </Head>
        <div className='cont'>
          <List data={ list } />
          <Paginations
            pageNumber={ pageNum }
            currentPage={ pageNum }
            hasDumpInput={ false }
            cellNumber = { Math.ceil(total/pageSize) }
            callback = { this.callback }
          />
        </div>
      </div>
    )
  }

  callback = idx => {
    idx === 1 ? location.href = '/' : location.href = `/page/${ idx }`
  }
  
  handle = (name: string) => {
    return name
  }
}

export default Index