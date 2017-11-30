import React, { Component } from 'react';
import { getUsersList } from 'services/api/users/users-api';
import { Col_3_12, Col_9_12, Row } from 'styled-components/main';
import UserList from 'components/UserBoxList/UserBoxList';
import FilterColumn from 'components/FilterColumn/FilterColumn';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      gender: ['man', 'woman'],
    };

    this.usersLimit = 100;
    this.setUsers = this.setUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setUsers();
  }

  async setUsers() {
    const users = await getUsersList(this.usersLimit);
    this.setState({ users });
  }

  handleChange(e) {
    const { value } = e.target;
    const isChecked = this.state.gender.includes(value);
    if (isChecked) {
      this.setState((oldState) => {
        return {
          gender: oldState.gender.filter(item => item !== value),
        };
      });
    } else {
      this.setState((oldState) => {
        return {
          gender: [...oldState.gender, value],
        };
      });
    }
  }

  render() {
    const { loading, users, gender } = this.state;

    return (
      <Row>
        <Col_9_12>
          <UserList users={users} loading={loading} />
        </Col_9_12>

        <Col_3_12>
          <FilterColumn gender={gender} handleChange={this.handleChange} />
        </Col_3_12>
      </Row>
    );
  }
}

export default FilteredList;
