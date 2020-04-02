import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import CarList from './containers/CarList/CarList';
// import asyncComponent from './hoc/asyncComponent';
import About from'./containers/About/About';
import Contact from './containers/Contact/Contact'

// const AsyncDetails = asyncComponent(() => {
//   return import('./containers/Details/Details');
// });
// const AsyncAbout = asyncComponent(() => {
//     return import('./containers/About/About');
// });
// const AsyncContact = asyncComponent(() => {
//     return import('./containers/Contact/Contact');
// });


class App extends React.Component {
  render() {
    //   const dynamicPath = new RegExp('localhost:3000\/Details*');

      return (
          <div>
              <div>
                  <Route path="/" exact component={CarList} />
                  <Route path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
                  {/* <Route path={dynamicPath} exact component={AsyncDetails} /> */}
              </div>
          </div>
      );
  }
}

export default App;