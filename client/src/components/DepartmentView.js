import React from 'react';
import axios from 'axios';
import { Grid, } from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = { departments: [], items: [] }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then( res => {
        // debugger
        this.setState({ items: res.data, });
      })
  }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <h2>Sorry, no products for sale.</h2>

    return items.map( item => (
        <Grid.Column key={item.id}>
          <Grid celled>
            <Grid.Row>
            <Grid.Column>
          { item.name }
            </Grid.Column>
            <Grid.Column>
          ${ item.id }
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          { item.description }
        </Grid.Row>
        </Grid>
        </Grid.Column>
    ))
  }

  render() {
    return (
      <Grid container columns={3}>
        { this.renderItems() }
      </Grid>
    )
  }
}

export default DepartmentView;
