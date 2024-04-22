// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Layout from '../components/Layout'; // Import a layout component
import UserComponent from '../components/UserComponent'; // Import a user component
import ErrorBoundary from '../components/ErrorBoundary'; // Import an error boundary component

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Layout>
          <UserComponent {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </Provider>
  );
}

export default MyApp;
