import { gutter } from 'constants/style-settings';
import styled from 'styled-components';

export const UserListStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${gutter}px;
`;

export const ListItemStyles = styled.div`
  width: calc(25% - ${gutter * 2}px);
  margin: 0 ${gutter}px ${gutter * 2}px;
`;

export const CardContainer = styled.div`
  padding: 10px 15px;

  ul {
    height: 110px;

    margin: 10px 0 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  svg {
    margin-right: 13px;
  }
`;

export const UserListItemStyles = {
  paper: {
    marginBottom: 0,
  },
  avatar: {
    display: 'block',
    width: 120,
    height: 120,
    margin: '0 auto',
  },
};
