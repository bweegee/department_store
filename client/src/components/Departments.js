import React from 'react';
import axios from 'axios';
import { Segment, Header, Icon, Button, } from 'semantic-ui-react';
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
          <Button
            as={Link}
            to={`/departments/${department.id}/edit`}
            basic
            size='mini'
          >
          <Icon
            name='edit'
          />
          </Button>
          <Button
            icon
            color='red'
            size='mini'
            onClick={() => this.deleteDepartment(department.id)}
          >
            <Icon name='trash' />
          </Button>
          <br />
          <Button
            as={Link}
            to={`/departments/${department.id}/items`}
            color='blue'
            size='mini'
          >
            View Products
          </Button>
        </Segment>
    ))
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const { departments, } = this.state;
        this.setState({ departments: departments.filter(d => d.id !== id), })
      })
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
                basic
                color='green'
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
