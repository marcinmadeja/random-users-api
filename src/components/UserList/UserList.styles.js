import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;

  ul {
    margin: 0;
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

export const UserData = styled.div`
  width: calc(50% - 60px);
  padding-left: 50px;
`;

export const UserListItemStyles = {
  paper: {
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
  },
};
