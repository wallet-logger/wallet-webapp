import React from 'react';
import {Helmet} from 'react-helmet';
// import './AppContainer.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

function AppContainer(children) {
  return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wallet Memory</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossOrigin="anonymous" />
          <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossOrigin="anonymous"></script>
          <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossOrigin="anonymous"></script>
          <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossOrigin="anonymous"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossOrigin="anonymous"></script>
        </Helmet>
        <body className="sb-nav-fixed">
          <Header />
          <div id="layoutSidenav">
            <Sidebar />
            <Dashboard />
          </div>
        </body>
      </div>
  );
}

export default AppContainer;
