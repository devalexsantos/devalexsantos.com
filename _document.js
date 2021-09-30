
import { ColorModeScript } from "@chakra-ui/react"
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from 'src/styles/theme';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument