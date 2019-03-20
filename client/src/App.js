import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import DepartmentsForm from './components/DepartmentsForm';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path='/' component={Departments} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/new' component={DepartmentsForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
