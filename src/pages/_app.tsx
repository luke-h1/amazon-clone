import Header from '@frontend/components';
import GlobalStyle from '@frontend/styles/global';
import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#111',
    white: '#fff',
    background: '#EAEDED',
    orange: 'orange',
    navBg: '#131921',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
