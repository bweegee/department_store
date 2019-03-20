import React from 'react';
import axios from 'axios';
import { Grid, Segment, Header, Icon, Button } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get('api/departments')
      .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  renderDepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>Sorry, no departments to show</h2>
    return departments.map( department => (
        <Segment key={department.id} raised>
          <Header as='h4'>
            { department.name }
          </Header>
        </Segment>
    ))
  }

  render() {
    return(
      <div>
        <Header as='h1' color='brown'>Casa Caca</Header>
            <Header as='h2'>
              Departments
            </Header>
            <Button
                as={Link}
                to='/departments/new'
                size='mini'
            >
              <Icon
                name='plus'
                color='green'
              />
              Add
              </Button>
          <br />
          <br />
      <Segment.Group>
        { this.renderDepartments() }
      </Segment.Group>
    </div>
    )
  }
}

export default Departments;
