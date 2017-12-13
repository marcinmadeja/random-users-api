import React, { Component } from 'react';
import UsersApi from 'services/api/users/users-api';
import { Row, Col } from 'components/grid';
import UserList from 'components/UserBoxList/UserBoxList';
import FilterColumn from 'components/FilterColumn/FilterColumn';
import OptionsBar from './OptionsBar/OptionsBar';
import DisplayPersons from './DisplayPersons/DisplayPersons';

const usersApi = new UsersApi();

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      searchSettings: {
        page: 1,
        results: 20,
        gender: [],
      },
    };

    this.usersLimit = 100;
    this.searchUsers = this.searchUsers.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleDisplayPersons = this.handleDisplayPersons.bind(this);
  }

  componentDidMount() {
    this.searchUsers();
  }

  async searchUsers() {
    const users = await usersApi.searchUsers(this.state.searchSettings);
    this.setState({ users });
  }

  handleGenderChange(e) {
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
        const searchSettings = Object.assign(
          oldState.searchSettings,
          { gender: [...oldState.searchSettings.gender, value] },
        );
        return { searchSettings };
      }, this.searchUsers);
    }
  }

  handleDisplayPersons(displayNumber) {
    displayNumber = parseInt(displayNumber, 10);
    const displayPersons = { results: displayNumber };
    const searchSettings = Object.assign(this.state.searchSettings, displayPersons);
    this.setState({ searchSettings }, () => {
      this.searchUsers();
    });
  }

  render() {
    const { loading, users, searchSettings } = this.state;

    return (
      <Row>
        <Col xs={12}>
          <OptionsBar>
            <DisplayPersons handleDisplayPersons={this.handleDisplayPersons} />
          </OptionsBar>
        </Col>

        <Col md={9} push={{ md: 3 }}>
          <UserList users={users} loading={loading} />
        </Col>

        <Col md={3} pull={{ md: 9 }}>
          <FilterColumn
            gender={searchSettings.gender}
            handleGenderChange={this.handleGenderChange}
          />
        </Col>
      </Row>
    );
  }
}

export default FilteredList;
