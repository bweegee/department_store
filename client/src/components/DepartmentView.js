import React from 'react';
import axios from 'axios';
import {Segment, } from 'semantic-ui-react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas fa-long-arrow-left } from '@fortawesome/free-solid-svg-icons';

class DepartmentView extends React.Component {
  state = {departments: [], items: []};

  componentDidMount() {
    axios
      .get(`/api/departments/${this.props.match.params.id}/items`)
      .then(res => {
        this.setState({items: res.data});
      });
  }

  renderItems = () => {
    const {items} = this.state;

    if (items.length <= 0) return <h2>Sorry, no products for sale.</h2>;

    return items.map(item => (
      <Segment.Group key={item.id}>
        <Segment.Group horizontal>
          <Segment><NiceHeader>{item.name}</NiceHeader></Segment>
          <Segment><NiceHeader>${item.price}</NiceHeader></Segment>
        </Segment.Group>
        <Segment.Group>
          <NiceSeg>{item.description}</NiceSeg>
        </Segment.Group>
      </Segment.Group>
    ));
  };

  render() {
    const dept_id = this.props.match.params.department_id;
    return
      <Link to={dept_id}>
      <FontAwesomeIcon
        icon={fas fa-long-arrow-left}
      />
      </Link>
      <NiceDiv>{this.renderItems()}</NiceDiv>;
  }
}

const NiceDiv = styled.div`
  padding: 10px;
  margin: 0px;
  text-align: center;
`;

const NiceHeader = styled.h3`
  text-align: center;
`;

const NiceSeg = styled.div`
  padding: 10px;
  margin: 0px;
  display: inline-block;
`;

const BackButt = styled.button`
  <i class="fas fa-long-arrow-left"></i>
`

export default DepartmentView;
