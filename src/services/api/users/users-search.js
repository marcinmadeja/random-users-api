import { getUsersAdvanced } from 'services/api/users/users-api';

const settings = {
  gender: '',
  page: 1,
  results: 100,
  seed: 'abc',
};

export function searchUsers({ searchSettings } = {}) {
  console.log('searchSettings', searchSettings);
}
