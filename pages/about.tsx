import React, { Component } from 'react';
import Head from 'next/head'
import { getDomain } from '@/config/base'
import 'isomorphic-unfetch'

import { connect } from 'react-redux'
import { saveSidebarStatus } from '@/redux/action/common'
import { handleSidebar } from '@/util/common'

import '@/static/scss/about.scss'

interface IProps {
  showSearch: boolean,
  intro: string,
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
class About extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  static async getInitialProps() {
    const res = await fetch(`${ getDomain() }/blog/aboutme`);
    const json = await res.json()
    return {
      intro: json.data.info.intro
    }
  }

  componentDidMount(){
    // let { saveSidebarStatus } = this.props;
    // handleSidebar(document, true,() => {
    //   saveSidebarStatus(false);
    // })
  }

  render(): JSX.Element {
    const { intro } = this.props;
    return (
      <div id='about'>
        <Head>
          <title>About | 谢小谢のBlog</title>
        </Head>
        <div className='cont' dangerouslySetInnerHTML={{__html: intro }}>
        </div>
      </div>
    )
  }
  
}

export default About