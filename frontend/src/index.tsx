import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './common/components/NavBar';
import { ItemsList } from './features/items/view/ItemsList';
import { Provider } from 'react-redux';
import { store } from './store';
import { Detailed } from './features/detailed/views/Detailed';
import { Loader } from './common/components/Loader';
import { Helmet } from 'react-helmet';
import { Meta } from './common/components/Meta';
import { Main } from './common/components/Main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const TITLE = 'Mercado Libre - Prueba técnica';

root.render(
  <React.StrictMode>
    <Helmet>
      <Meta title={TITLE} />
    </Helmet>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Main>
          <Loader />
          <Routes>
            <Route path="/list" element={<ItemsList />} />
            <Route path="/item/:id" element={<Detailed />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

