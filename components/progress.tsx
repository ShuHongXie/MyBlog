
import React, { Component } from 'react';

import '@/static/compscss/progress.scss'

interface IProps {
  data: Array<Object>
}

interface IState {
}

class Progress extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hanlde: false
    };
  }
  render(): JSX.Element {
    const { data } = this.props;
    let arr:string[] = [];
    let finalData:Array<any>[] = [];
    data.forEach((item: any) => {
      arr.push(item.year);
    })
    arr = Array.from(new Set(arr));
    arr.forEach((item: String, idx: number) => {
      finalData[idx] = [];
      data.forEach((items: any) => {
        if(item === items.year) {
          finalData[idx].push(items);
        }
      })
    })

    return (
      <div id='progress'>
        {
          finalData.map((item ,idx) => {
            return (
              <ul key={ idx }>
                <li className='year'>{ item[0].year }</li>
                {
                  item.map((items, idxs) => {
                    return (
                      <li key={ idxs }>
                        <span>{ items.create_time }</span> 
                        <a href={ `/article/${ items.link }` }  >{ items.title }</a>
                      </li>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
    )
  }
}

export default Progress