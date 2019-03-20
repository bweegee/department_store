import React from 'react';
import axios from 'axios';
import { Grid, } from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = { departments: [], items: [] }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then( res => {
        debugger
        // this.setState({ department: res.data, });
      })
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          aksdljf
        </Grid.Column>
      </Grid>
    )
  }
}

export default DepartmentView;
