import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import wrapper from '../store/configure-store';
import login from './login';
import './css/login.css';

const App = ({ Component }) => {

  return(
    <div>
      <Head>
        <title>MyWeb</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <Component />
    </div>
  );
};

export default wrapper.withRedux(App)