import React from 'react';
import { Header, Container, } from 'semantic-ui-react';

const Home = () => (
  <Container textAlign='center'>
    <Header size='huge' color='brown'>Casa Caca</Header>
    <Header as='h3'>
      Your best source for
      <Header size='huge' color='brown'>poop</Header>
    </Header>
  </Container>
)

export default Home;
