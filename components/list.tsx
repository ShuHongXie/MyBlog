
import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import Scissors from './scissors'

import '@/static/compscss/list.scss'
import '@/static/compscss/highlight.scss'
import '@/static/compscss/articlerender.scss'
import '@/static/compscss/markdown-nav.scss'

interface IProps {
  data: Array<any>
}

interface IState {
}

hljs.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
})
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  xhtml:true,
  smartypants: false,
  sanitize: true
});

// 链接列表
class List extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }
  render(): JSX.Element {
    const { data }  = this.props;
    return (
      <div className='list'>
        <ul>
          {
            data.map((item ,idx) => {
              return (
                <li key={ idx }>
                  <a href={ `/article/${ item.link }` } className='title'>{ item.title }</a>
                  <div className='tip'>
                    <span>{ item.create_time }</span>
                    { item.categoryArticles.length !== 0 ? (<i className="sep">|</i>) : null } 
                    <div className="category">
                      {
                        item.categoryArticles.map((item, idx) => {
                          return (
                            <a href={ `/categories/${ item.category.name }/1` } key={ idx }>{ item.category.name }</a>
                          )
                        })
                      }
                    </div>
                    { item.tagsArticles.length !== 0 ? (<i className="sep">|</i>) : null } 
                    <div className="tag">
                      {
                        item.tagsArticles.map((item, idx) => {
                          return (
                            <a href={ `/tag/${ item.tags.name }/1` } key={ idx }>{ item.tags.name }</a>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="md_box" dangerouslySetInnerHTML = {{__html: marked(item.content ? item.content.substring(0, item.content.indexOf('/more')) : '')}} ></div>
                  <a className="more" href={ `/article/${ item.link }` } >Read more</a>
                  <Scissors />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List