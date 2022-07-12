import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Battery from 'src/components/Battery';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Battery />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
