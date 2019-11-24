import App, {Container} from 'next/app'
import { Provider } from 'react-redux';
import { getDomain } from '@/config/base'
import configureStore from '@/redux/config'
import reducers from '@/redux/reducers'
import sagas from '@/redux/saga'
import 'isomorphic-unfetch'
import dynamic from 'next/dynamic'

const LayoutComponent = dynamic(import('@/components/layout'))

const store = configureStore(reducers, sagas);

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const res = await(await fetch(`${ getDomain() }/common`)).json();
    // const aboutInfo = await(await fetch(`${ getDomain() }/blog/aboutme`)).json();
    const visitCount = await(await fetch(`${ getDomain() }/visitCount`)).json();
    /*
    const uvCount = await(await fetch(`${ getDomain() }/uv`)).json();
    // 更新页面访问数量
    await fetch(`${ getDomain() }/updateVc`,{ method: 'PUT' });
    */
    return { pageProps, data: { 
      ...res.data,
      ...res.data.info,
      visitCount:  visitCount.data.count || 0,
      uvCount: visitCount.data.uvCount || 0,
      intro: "" ,
      avatar: res.data.info.avatar
    } }
  }

  render() {
    const { Component, pageProps, data} = this.props;
    return (
      <Container>
        <Provider store={ store }>
          { 
            pageProps.statusCode ? 
              <Component {...pageProps} /> :
              <LayoutComponent data={ data }>
                <Component {...pageProps} />
              </LayoutComponent>
          }
        </Provider>
      </Container>
    )
  }
}

export default MyApp
