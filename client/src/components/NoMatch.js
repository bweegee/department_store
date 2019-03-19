import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Button, } from 'semantic-ui-react';

const NoMatch = () => (
  <div>
    <Header as='h1'>You didn't say the magic word.</Header>
    <Link to='/'>
      <Button>Home</Button>
    </Link>
  </div>
)

export default NoMatch;
