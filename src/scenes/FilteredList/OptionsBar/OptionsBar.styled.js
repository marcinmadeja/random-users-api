import styled from 'styled-components';
import { gutter } from 'styled-components/main';

export const Bar = styled.div.attrs({
  className: 'mdc-elevation--z2',
})`
  width: 100%;
  display: flex;
  padding: ${gutter};
  margin-bottom: ${gutter};

  & > div:last-child {
    margin-left: auto;
  }
`;
