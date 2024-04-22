// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import Layout from '../src/components/Layout'; // Import a layout component
import UserComponent from '../src/components/UserComponent'; // Import a user component
import ErrorBoundary from '../src/components/ErrorBoundary'; // Import an error boundary component

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
