import React from 'react'
import { getLocalIp } from '@/config/base'

import '@/static/scss/error.scss'

export default class Error extends React.Component {
  state = {
    errorMessage : ''
  }
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    const statusMessage = res ? res.statusMessage : err ? err.statusMessage : null;
    return { statusCode }
  }

  componentDidMount() {
    const { statusCode } = this.props;
    let errorMessage;
    switch(statusCode) {
      case 404:
        errorMessage = 'Not Found';
        break;
      case 500:
        errorMessage = 'Server Error';
        break;
      case 400:
        errorMessage = 'Param Error';
        break;
    }
    this.setState({ errorMessage });
  }

  render() {
    const { statusCode } = this.props;
    const { errorMessage } = this.state;
    return (
      <div id='error' >
        <span className="left_code">{ statusCode } { errorMessage }</span>
        <a href={ getLocalIp() } className="right_code"><span>back home</span></a>
        <div className="center_code">{ statusCode }</div>
      </div>
      
    )
  }
}