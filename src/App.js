import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth' component={DefaultLayout} />
            <PrivateRoute path='/' component={MainLayout} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
