
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleComp } from '@/redux/action/common'
import { getSearchList } from '@/redux/action/search'

import '@/static/compscss/search.scss'

import Scissors from './scissors'
import Paginations from './paginations'

interface IProps {
  handleComp?: any,
  getSearchList?: any,
  searchList?: any
}

interface IState {
  pageNum: number,
  searchCont: string
}

@connect(state => ({
  searchList: state.SearchList.data ? state.SearchList.data : null,
}), {
  handleComp,
  getSearchList
})
class Search extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      pageNum: 1,
      searchCont: '',
    };
  }
  render(): JSX.Element {
    const { searchList } = this.props;
    const { pageNum } = this.state; 
    return (
      <div id='search'>
        <h3>Article Search</h3>
        <input 
        type="text"  
        placeholder="Search Something"
        onChange={(e)=>this.changeEvent(e)}
         />
        <Scissors />
        <div className='view'>
          {
            searchList && searchList.list && searchList.list.length ? (
              <>
                <ul>
                  {
                    searchList.list.map((item, idx) => {
                      return (
                        <li key={ idx } ><a href={ `/article/${ item.link }` } >{ item.title }</a></li>
                      )
                    })
                  }
                </ul>
                <div className='page'>
                  <Paginations
                    pageNumber={ pageNum }
                    currentPage={ parseInt(searchList.pageNum) }
                    hasDumpInput={ false }
                    cellNumber = { Math.ceil(searchList.total/searchList.pageSize) }
                    callback = { this.callback }
                  />
                </div>
                <Scissors />   
              </> 
              ) : null
            } 
            { 
              searchList && searchList.list && !searchList.list.length ? (
                <>
                  <p>没有找到相关文章</p> 
                  <Scissors />
                </>   
                ) : null
             }
          </div>
          
          <i className='iconfont iconclose close' onClick={ this.close }></i>
        </div>
    )
  }

  callback = idx => {
    const { pageNum } = this.state;
    if(idx === pageNum) return false;
    this.props.getSearchList({ key: this.state.searchCont, pageNum: idx });
    this.setState({
      pageNum: idx
    })
  }

  // 关闭搜索框
  close = () => {
    this.props.handleComp({ black: false, search: false })
  }

  // 输入框输入
  changeEvent = e => {
    if(e.target.value) {
      this.setState({
        pageNum: 1,
        searchCont: e.target.value
      })
      this.props.getSearchList({ key: e.target.value.trim(), pageNum: 1 });
    }
  }
}

export default Search