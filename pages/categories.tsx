
import React, { Component } from 'react'
import Head from 'next/head'
import { getDomain } from '@/config/base'
import 'isomorphic-unfetch'

import CategoryList from '@/components/categorylist'

import { connect } from 'react-redux'
import { saveSidebarStatus } from '@/redux/action/common'
import { handleSidebar } from '@/util/common'

import '@/static/scss/categories.scss'

interface IProps {
  showSearch: boolean,
  count: number,
  list: Array<any>,
  saveSidebarStatus: any,
  data: any,
  sidebarStatus: any
}

interface IState {
  
}

@connect(state => ({
  sidebarStatus: state.SidebarStatus
}), {
  saveSidebarStatus
})
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

  static async getInitialProps() {
    const res = await fetch(`${ getDomain() }/blog/categories`);
    const json = await res.json()
    return {
      list: json.data.list,
      count: json.data.count
    }
  }

  componentDidMount(){
    // let { saveSidebarStatus } = this.props;
    // handleSidebar(document, true,() => {
    //   saveSidebarStatus(false);
    // })
  }

  render(): JSX.Element {
    const { list, count } = this.props;
    return (
      <div id='categories'>
        <Head>
          <title>Categories | 谢小谢のBlog</title>
        </Head>
        <div className='cont'>
          <CategoryList data={ list } count={ count } />
        </div>
      </div>
    )
  }

  handle = (name: string) => {
    return name
  }
}

export default Index