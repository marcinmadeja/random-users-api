import styled from 'styled-components';
import grid from '../utils/Grid.class';

const { gutter, getColWidth } = grid;

export const ColStyled = styled.div`
  flex-grow: 1;
  ${props => getColWidth(props)}

  padding-left: ${gutter};
  padding-right: ${gutter};
`;
