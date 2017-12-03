import React, { Component } from 'react';
import UsersApi from 'services/api/users/users-api';
import { Container, Row, Col } from 'components/grid';
import UserList from 'components/UserBoxList/UserBoxList';
import FilterColumn from 'components/FilterColumn/FilterColumn';

const usersApi = new UsersApi();

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.usersLimit = 100;
    this.searchUsers = this.searchUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      users: [],
      loading: true,
      searchSettings: {
        page: 1,
        results: this.usersLimit,
        gender: [],
      },
    };
  }

  componentDidMount() {
    this.searchUsers();
  }

  async searchUsers() {
    const users = await usersApi.searchUsers(this.state.searchSettings);
    this.setState({ users });
  }

  handleChange(e) {
    const { value } = e.target;
    const isChecked = this.state.searchSettings.gender.includes(value);
    if (isChecked) {
      this.setState((oldState) => {
        const searchSettings = Object.assign(oldState.searchSettings, {
          gender: oldState.searchSettings.gender.filter(item => item !== value),
        });
        return { searchSettings };
      }, this.searchUsers);
    } else {
      this.setState((oldState) => {
        const searchSettings = Object.assign(oldState.searchSettings,
          { gender: [...oldState.searchSettings.gender, value] }
        );
        return { searchSettings };
      }, this.searchUsers);
    }
  }

  render() {
    const { loading, users, searchSettings } = this.state;

    return (
      <Row>
        <Col md={9}>
          <UserList users={users} loading={loading} />
        </Col>

        <Col md={3}>
          <FilterColumn gender={searchSettings.gender} handleChange={this.handleChange} />
        </Col>
      </Row>
    );
  }
}

export default FilteredList;
