import styled from 'styled-components';
import { gutter } from 'styled-components/main';

export const Bar = styled.div.attrs({
  className: 'mdc-elevation--z2',
})`
  padding: ${gutter};
  margin-bottom: ${gutter};
`;
