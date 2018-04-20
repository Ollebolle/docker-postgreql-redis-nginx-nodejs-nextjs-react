import Document, { Head, Main, NextScript } from 'next/document'
import Navbar from '../layout/navbar/navbar'
import PageBorder from '../layout/page_border'


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <PageBorder />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}