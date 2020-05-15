import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import SocioFormPage from './pages/SocioFormPage/SocioFormPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component= { HomePage } />
          <Route exact path="/about" component= { AboutPage } />
          <Route exact path="/blogs" component= { BlogsPage } />
          <Route exact path="/blogs/:blogId" component= { BlogsPage } />
          <Route exact path="/newSocio" component= { SocioFormPage } />
          {/* <Route component= { NotFound } /> */}
        </Switch>
      </Layout>    
    </BrowserRouter>
  );
}

export default App;