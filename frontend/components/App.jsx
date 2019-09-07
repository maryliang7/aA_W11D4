import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './user/greeting_container';
import SearchContainer from './search/search_container';
import LoginFormContainer from './user/login_form_container';
import SignupFormContainer from './user/signup_form_container';
import BenchFormContainer from './bench/bench_form_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
    <Route exact path="/" component={SearchContainer} />

    
  </div>
);

export default App;