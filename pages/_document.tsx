import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link href='https://fonts.googleapis.com' rel='preconnect' />
                    <link crossOrigin='true' href='https://fonts.gstatic.com' rel='preconnect' />
                    <link href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}