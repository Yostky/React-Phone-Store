import React from 'react';
// import reactDom from 'react-dom';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  Home  from './Home';
import  Contact  from './Contact';
import  About  from './About';
import  NoMatch  from './NoMatch';
import Details from './components/Details';
import { Layout } from './components/Layout';
// import {Link} from "react-router-dom";
import {NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import Modal from './components/Modal';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <React.Fragment>
        <NavigationBar/>
        <Jumbotron/>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details" component={Details} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart}/>
            <Route component={NoMatch} />
          </Switch>
          <Modal/>
        </Layout>
    </React.Fragment>
  );
}

export default App;

/*
-------------------------------------Finish by Wednesday Night---------------------------------------------------------
- I need to add more sales pitches for the products in the store. (trending, discounted, new!) Add text alongside these topics to sell product
- Add a footer with all of the links associated with footers
- Add a jumbotron for the home page that isn't a star-spangled shit show
- Change the navbar to something that reflects the homepage better
- Add individual pictures to represent the item category itself (Phone picture: text + Link to the phone products, Tablet picture: text + link to the tablet products)
*/ 