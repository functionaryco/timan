import App from 'next/app';
import { ThemeProvider, Container } from 'theme-ui';
import NProgress from 'next-nprogress-emotion';

import Header from '../components/Header';
import theme from '../theme';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>TImer</title>
          <link
            href="https://api.fontshare.com/css?f[]=satoshi@400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <NProgress />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
