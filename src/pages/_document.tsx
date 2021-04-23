import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render () {
    return(
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="logo.svg" type="image/svg"/>

          <link rel="preload" as="style" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Stoke&display=swap" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}