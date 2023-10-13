import Header from '@frontend/components/Header';
import { store } from '@frontend/store';
import GlobalStyle from '@frontend/styles/global';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
