import React from 'react';
import axios from 'axios';

class ItemForm extends React.Component{
  state = { item: {} }

  componentDidMount() {
    const { match: { params: { id, department_id } } } = this.props
    axios.get(`/api/departments/${department_id}/items/${id}`)
      .then(res => {
        this.setState({ item: res.data })
    })
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default ItemForm;
