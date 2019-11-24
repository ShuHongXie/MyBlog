
import React, { Component } from 'react';

import '@/static/compscss/categorylist.scss'

interface IProps {
  data: Array<any>,
  count: number
}

interface IState {
}

class CategoryList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hanlde: false
    };
  }
  render(): JSX.Element {
    const { data, count } = this.props;
    return (
      <div id='categorylist'>
        <div className='category_list_title'>Categories - { count }</div>   
          {
            this.renderList(data)
          }
      </div>
    )
  }

  renderList = (data: any) => {
    return (
      <ul>
        {
          data.map( item => (
            <li key={ item.id }>
              <a href={ `/categories/${ item.name }/1` }>{ item.name }</a>
              <span>({ item && item.categoryArticles ? item.categoryArticles.length : 0 })</span> 
              {
                item.categorys ? this.renderList(item.categorys) : null
              }
            </li>
          ))
        }
      </ul>
    )
  }
}


export default CategoryList