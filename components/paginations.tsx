
import React, { Component } from 'react';
import Router from 'next/router'

import '@/static/compscss/paginations.scss'

interface IProps {
  pageNumber?: any, // 总页数
  currentPage?: any, // 当前页数
  cellNumber?: number, // 页码格子数量
  hasDumpInput?: boolean, // 展示跳转栏
  url?: string, // 页面名称
  callback: callback
}

interface callback {
  (idx: number): void
}

interface IState {
  inpVal: string
}

// 分页组件
class Paginations extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inpVal: '', // input的值
    };
  }
  render(): JSX.Element {
    const { inpVal } = this.state;
    const { pageNumber, currentPage, cellNumber, hasDumpInput, url } = this.props;
    const cPage = currentPage, showInput = hasDumpInput || false;
    let res,arr: any = [];
    if(currentPage > pageNumber){
      console.error('当前页码不能超过总页数')
      return <></>;
    }
    arr.length = cellNumber || 5;
    arr.fill(null)
    res = this.renderComp(arr, currentPage, pageNumber, url)
    return (
      <div className='pagination'>
        {
          cellNumber ? (
            <div className='pg_box'>
              {
                cPage === 1 ? null: (
                  <a className='prev' onClick={ () => this.click(currentPage - 1) }><i className='iconfont iconprevious'></i></a>
                )
              }
              { res }
              {
                cPage === pageNumber ? null: (
                  <a className='prev' onClick={ () => this.click(currentPage + 1) }><i className='iconfont iconnext'></i></a>
                )
              }
              {/* {
                showInput && cellNumber != 1 ? (
                  <div className='jump_box'>
                    <span>跳转至</span>
                    <input 
                      onChange={(e) => this.handleInp(e)} 
                      type="text" 
                      onKeyDown={(e) => this.dump(e)}
                      value={inpVal}
                    />
                  </div>
                ) : null
              } */}
            </div>
          ) : null
        }
        
      </div>
    )
  }
  prev = ( url, currentPage ) =>{
    location.href = `${url}/${currentPage - 1 }`
  }
  next = ( url, currentPage ) =>{
    location.href = `${url}/${currentPage + 1 }`
  }
  // input框取值
  handleInp = e => {
    this.setState({
      inpVal: e.target.value
    })
  }
  // 页面跳转
  dump = e => {
    if(e.keyCode === 13) {
      if(parseInt(this.state.inpVal) > this.props.pageNumber) {
        console.error('超过最大页数范围');
      } else {
        Router.push('/about');
      }
    }
  }
  // 分页点击
  click = idx => {
    this.props.callback(idx);
  }
  // 组件遍历
  renderComp = (arr, cP, pN, url) => {
    let res;
    if(cP < Math.round(arr.length/2) ){
      res = arr.map((item,idx: number)=>{
        return (
          <a onClick={ () => this.click(idx+1) } key={idx} className={ cP-1 === idx ? 'active link_number' : 'link_number' } >{ idx + 1 }</a>
        )
      })
     }  else if(cP > pN - Math.round(arr.length/2) - 1){
      res = arr.map((item,idx: number)=>{
        return (
          <a onClick={ () => this.click(idx+1) } key={idx} className={ cP === idx+1 ? 'active link_number' : 'link_number' } >{ idx + 1 }</a>
        )
      })
     } else {
      res = arr.map((item,idx: number)=>{
        return (
          <a onClick={ () => this.click(idx+1) } key={idx} className={ Math.round(arr.length/2) - 1 === idx ? 'active link_number' : 'link_number' } >{ cP + idx - Math.round(arr.length/2) + 1 }</a>
        )
      })
    }
    return res;
  }
  
}

export default Paginations