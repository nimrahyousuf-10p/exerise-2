import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Home from '../Home';
import News from '../News';
import Layout from '../Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
