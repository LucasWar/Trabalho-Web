import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Routes from '../../routes';
import { BrowserRouter } from 'react-router-dom';

import StoreProvider from '../Store/Provider';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <StoreProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />

            <Header />
            <Routes />
          </ThemeProvider>
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}

