import grid from 'components/grid';
import styled from 'styled-components';

const { gutter, multiplyUnitValue } = grid;

export const UserListStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${gutter};
`;

export const ListItemStyles = styled.div`
  width: calc(25% - ${multiplyUnitValue(gutter, 2)});
  margin: 0 ${gutter} ${multiplyUnitValue(gutter, 2)};
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
