import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import DepartmentsForm from './components/DepartmentsForm';
import DepartmentView from './components/DepartmentView';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Item from './components/Item';
import ItemForm from './components/ItemForm';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/new' component={DepartmentsForm} />
        <Route exact path='/departments/:id/edit' component={DepartmentsForm} />
        <Route exact path='/departments/:id' component={DepartmentView} />
        <Route exact path='/departments/:id/items/new' component={ItemForm} />
        <Route exact path='/departments/:id/items' component={DepartmentView} />
        <Route exact path='/departments/:id/items/:id' component={Item} />
        <Route exact path='/departments/:id/items/:id/edit' component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
