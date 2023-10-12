import App from 'next/app';
import { ThemeProvider, Container } from 'theme-ui';
import NProgress from 'next-nprogress-emotion';
import theme from '../theme';
import Head from 'next/head';
import HydrationZustand from 'src/components/HydrationZustand';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <HydrationZustand>
      <ThemeProvider theme={theme}>
        <Head>
        </Head>
        <NProgress />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
      </HydrationZustand>

    );
  }
}

export default MyApp;
