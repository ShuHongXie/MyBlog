import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDomain, getLocalIp, clientID, clientSecret } from '@/config/base'
import Head from 'next/head'
import marked from 'marked'
import hljs from 'highlight.js'
import Viewer from 'viewerjs'
import Gitalk from 'gitalk'
import { getArticle } from '@/redux/action/article'
import { handleMessage } from '@/redux/action/message'

import { saveSidebarStatus } from '@/redux/action/common'
import { handleSidebar } from '@/util/common'

import { initCopyBtn } from '@/util/common'

import '@/static/compscss/gitalk.scss'
import '@/static/scss/article.scss'
import '@/static/compscss/highlight.scss'
import '@/static/compscss/articlerender.scss'
import '@/static/compscss/markdown-nav.scss'
import '@/static/compscss/viewer.min.scss'

interface IProps {
  data: any,
  getArticle: any,
  articleInfo: any,
  saveSidebarStatus: any,
  sidebarStatus: any,
  author: string,
  link: string,
  info: any,
  handleMessage: any
}

interface IState {
  docContent: string,
  randomState: number,
  accessToken: string,
  messageInfo: string,
  messageStatus: boolean,
  messageType: string
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

@connect(state => ({
  sidebarStatus: state.SidebarStatus,
  author: state.Author.data.name,
  info: state.GetArticle.data && state.GetArticle.data.info ? state.GetArticle.data.info : '',
}), {
  saveSidebarStatus,
  getArticle,
  handleMessage
})
class Article extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      docContent: ``,
      randomState: new Date().getTime(),
      accessToken: ``,
      messageInfo: ``,
      messageStatus: false,
      messageType: ``
    };
  }

  static async getInitialProps(context) {
    const { link } = context.query;
    console.log(`>>>>>>>> ${ link } >>>>>>>>>>>`)
    const res = await fetch(`${ getDomain() }/article/${ encodeURIComponent(link) }`);
    const json = await res.json();
    return {
      data: json.data,
      link
    }
  }

  render(): JSX.Element {
    const { data, author, link, info } = this.props;
    console.log(link)
    return (
      <div id='article'>
        <Head>
          <title>{ info.title } | 谢小谢のBlog</title>
        </Head>
        <div 
        id="article_cont"
        className="cont md_box" 
        dangerouslySetInnerHTML = {{__html: marked(data.info.content.replace('/more', ''))}}
        ></div>
        
        <div className="cont copyright_box">
          <p>
            <span>Author: </span>
            <a href="mailto:undefined">{ author }</a>
          </p>
          <p>
            <span>Link: </span>
            <a href={ `${ getLocalIp() }/article/${ link }` }>{ `http://xiesmallxie.cn/article/${ link }` }</a>
          </p>
          <p>
            <span>Copyright Notice: </span>
            <span>All articles in this blog are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> unless stating additionally.</span>
          </p>
        </div>
        <div className="cont brothers_box">
          {
            data && data.brothers &&  data.brothers.map((item, idx) => {
              return item && item.link ? (
                <a key={ idx } href={ "/article/" + item.link }>{ item && item.title || '' }</a>
              ) : (<div key={ idx }></div>)
            })
          }
        </div>
        <div id="gitalk-container" className="cont"></div>
        {/* <div className="github_box">
          <div onClick={ this.githubOauth }>github登录</div>
        </div> */}
      </div>
    )
  }
  // github登录
  /*
  githubOauth = () => {
    const { link } = this.props;
    console.log(link)
    location.href = `https://github.com/login/oauth/authorize?client_id=${ clientId }&redirect_uri=${ getLocalIp() }/article/${ encodeURIComponent(link) }`
  }
  */
  componentDidMount() {
    const { data, getArticle,  saveSidebarStatus } = this.props;
    console.log(location.pathname)
    handleSidebar(document, false,() => {
      saveSidebarStatus(true);
    })
    getArticle(data);
    // 初始化图片查看器
    new Viewer(document.getElementById('article_cont') as HTMLElement, {
      toolbar: false,
      navbar: false
    });
    // 初始化评论区
    let gitalk = new Gitalk({
      clientID,
      clientSecret,
      repo: 'MyBlog',
      owner: 'ShuHongXie',
      admin: ['ShuHongXie'],
      id: decodeURI(location.pathname),      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    // 创建copy按钮
    initCopyBtn(document);

    gitalk.render('gitalk-container');
  }

  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = () => {
        return;
    }
  }
  // 获取accessToken
  /* 
  getAccessToken = async () => {
    const res = await(await fetch(`${ getDomain() }/github/accessToken`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: this.getQueryString("code"),
      })
    })).json();
    if(res.data.access_token){
      this.setState({
        accessToken: res.data.access_token 
      }, () => {
        localStorage.setItem('accessToken', res.data.access_token );
      })
    } else {
      this.props.handleMessage({ status: true, type: 'error', info: res.data.error_description });
    }
  }

  getQueryString(name)  {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  }
  */
}

export default Article