
import React, { Component } from 'react'
import { getDomain } from '@/config/base'
import Head from 'next/head'
import 'isomorphic-unfetch'
import Progress from '@/components/progress'
import Pagination from '@/components/pagination'

import '@/static/scss/archives.scss'

interface IProps {
  showSearch: boolean,
  list: Array<any>,
  total: number,
  pageNum: number,
  currentPage: string,
  pageSize: number,
  categoryName: string
}

interface IState {
  
}

class CategoriesDetail extends Component<IProps, IState> {
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
    const { categoryName, pageNum } = context.query;
    const res = await fetch(`${ getDomain() }/blog/categoriesDetail`, {
      method: 'POST',
      body: JSON.stringify({ categoryName, pageNum }),
      credentials: 'same-origin',
      headers: { 
        "Content-Type": "application/json"
      },
    });
    const json = await res.json();
    return {
      list: json.data.list,
      total: json.data.total,
      pageNum: json.data.pageNum,
      pageSize: json.data.pageSize,
      currentPage: pageNum,
      categoryName
    }
  }
  
  render(): JSX.Element {
    const { list, total, pageNum, currentPage, pageSize, categoryName } = this.props;
    return (
      <div id='archives'>
        <Head>
          <title>Category: { categoryName } | 谢小谢のBlog</title>
        </Head>
        <div className='cont'>
          <div className='archives_list_title'>Articles - { total }</div>
          <Progress data={ list } />
          <Pagination
          pageNumber={ pageNum }
          currentPage={ parseInt(currentPage) }
          hasDumpInput={ true }
          url={ '/categories' }
          cellNumber = { Math.ceil(total/pageSize) }
          />
        </div>
      </div>
    )
  }

  componentDidMount () {
    
  }
  handle = (name: string) => {
    return name
  }
}

export default CategoriesDetail