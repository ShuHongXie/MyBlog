import Document, { Head, Main, NextScript } from 'next/document'
// 可以理解为全局的样式  
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return  (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="keywords" content="谢小谢のBlog, Music, Guitar, 谢树宏, 谢小谢, 谢小谢的博客, 前端" />
          <meta name="description" content="谢小谢のBlog" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="white" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="screen-orientation" content="portrait" />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <meta name="x5-orientation" content="portrait" />
          <meta name="x5-fullscreen" content="true" />
          <meta name="x5-page-mode" content="app" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel='stylesheet' href="/static/scss/reset.css" />
          <link rel='stylesheet' href="/static/font/iconfont.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }

  
}
