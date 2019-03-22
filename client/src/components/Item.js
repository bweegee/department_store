import React from 'react';
import axios from 'axios';
import { Image, Container, Header, } from 'semantic-ui-react';

class Item extends React.Component {
  state = { item: {} }

  componentDidMount() {
    const { match: { params: { id, department_id } } } = this.props
    axios.get(`/api/departments/${department_id}/items/${id}`)
      .then(res => {
        this.setState({ item: res.data })
    })
  }

  render(){
    const item = this.state
    return(
      <Container>
      <Header>{ item.name }</Header>
        <Image src={"https://loremflickr.com/400/400/products?" + Math.random()} alt="Product" />
      </Container>
    )
  }
}

export default Item;
