import React, { Component } from 'react';
import { Paper } from 'material-ui';
import UserListShort from 'components/UserListShort/UserListShort';
import { Title } from './SidebarUserList.styles';

const users = [{ "gender": "male", "name": { "title": "mr", "first": "karl", "last": "johnson" }, "location": { "street": "5825 pecan acres ln", "city": "anaheim", "state": "new mexico", "postcode": 65891 }, "email": "karl.johnson@example.com", "login": { "username": "organicbutterfly786", "password": "fenris", "salt": "bDS9jzK3", "md5": "ee5a1150ca9178e7b7c9ed9c6a1ad9fd", "sha1": "5c8e619331fe0bc814520a73bdf8dbe44146b061", "sha256": "487cfc9b6a5900978b4b9cdb795d4a465fb4590d749b2daca013216b5409b711" }, "dob": "1948-08-24 03:26:34", "registered": "2007-11-18 04:39:16", "phone": "(006)-832-0490", "cell": "(047)-684-3316", "id": { "name": "SSN", "value": "355-74-8885" }, "picture": { "large": "https://randomuser.me/api/portraits/men/62.jpg", "medium": "https://randomuser.me/api/portraits/med/men/62.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/62.jpg" }, "nat": "US" }, { "gender": "female", "name": { "title": "mrs", "first": "asuncion", "last": "gomez" }, "location": { "street": "1924 calle de ángel garcía", "city": "torrente", "state": "comunidad valenciana", "postcode": 52933 }, "email": "asuncion.gomez@example.com", "login": { "username": "crazytiger593", "password": "pyon", "salt": "iyuoArpz", "md5": "e826af998a4c390823cab42b49c895f4", "sha1": "d4ddac5eabc363d58e0372bfeb08ea07f5b17377", "sha256": "3d75021e28026816c51dfe89d31544ac0e4962706f7e461c56ac93f427c54097" }, "dob": "1987-12-02 15:26:08", "registered": "2016-05-27 05:26:14", "phone": "967-270-696", "cell": "676-312-778", "id": { "name": "DNI", "value": "71458558-U" }, "picture": { "large": "https://randomuser.me/api/portraits/women/52.jpg", "medium": "https://randomuser.me/api/portraits/med/women/52.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg" }, "nat": "ES" }, { "gender": "female", "name": { "title": "miss", "first": "gilcenira", "last": "ribeiro" }, "location": { "street": "2157 rua minas gerais ", "city": "tatuí", "state": "roraima", "postcode": 73651 }, "email": "gilcenira.ribeiro@example.com", "login": { "username": "whitebear434", "password": "blaster", "salt": "JrORuRpq", "md5": "ec4c1c7b1eda639f15d78b4ce5db4952", "sha1": "c7ce835825ea545f947b6969c206b853fa941140", "sha256": "d4e543c05a8af3706d100684d7445ea873dd7f7b9d70ff027446d16bf6a111d5" }, "dob": "1946-09-30 00:33:45", "registered": "2011-11-05 04:26:16", "phone": "(65) 5067-1618", "cell": "(12) 6328-5122", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/21.jpg", "medium": "https://randomuser.me/api/portraits/med/women/21.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg" }, "nat": "BR" }];

class SidebarUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users,
      loading: true,
    };
  }

  render() {
    return (
      <Paper elevation={2}>
        <Title>Most popular</Title>
        <UserListShort users={this.state.users} loading={this.state.loading} />
      </Paper>
    );
  }
}

export default SidebarUserList;
