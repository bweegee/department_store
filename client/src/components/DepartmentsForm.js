import React from 'react';
import axios from 'axios';
import { Form, Segment, Header, } from 'semantic-ui-react';

class DepartmentsForm extends React.Component {
  state = { name: "" };

  componentDidMount() {
    const id = this.props.match.params.id
    if (id)
      axios.get(`/api/departments/${id}`)
        .then( res => {
          this.setState({ name: res.data.name })
        })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state };
    const id = this.props.match.params.id;
    if (id) {
      axios.patch(`/api/departments/${id}`, department)
        .then( res => {
          this.props.history.push(`/departments/${id}`)
        })
    } else {
      axios.post(`/api/departments`, department)
        .then( res => {
          this.props.history.push(`/departments`)
        })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { name } = this.state
    return(
      <Segment.Group style={{marginTop: '10px'}}>
      <Segment>
        <Header as='h1'>Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Name'
            name='name'
            placeholder='Department Name'
            required
            onChange={this.handleChange}
            value={name}
          />
          <Form.Button color='green'>
            Submit
          </Form.Button>
        </Form>
      </Segment>
      </Segment.Group>
   )
  }
}

export default DepartmentsForm;
