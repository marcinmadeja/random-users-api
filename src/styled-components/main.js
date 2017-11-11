import styled from 'styled-components';
import { screenLg, gutter } from 'constants/style-settings';

export const Container = styled.div`
	width: ${screenLg};
	margin-left: auto;
	margin-right: auto;
`;

export const Row = styled.div`
	display: flex;
	margin: 0 -${gutter};
`;
