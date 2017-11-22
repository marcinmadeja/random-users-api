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

export const Col = styled.div`
	padding-left: ${gutter};
	padding-right: ${gutter};
`;

export const MainTitle = styled.h1`
	margin: 0 0 25px;
	font-size: 32px;
	font-weight: 500;
`;

export const MainText = styled.div`
	font-size: 18px;
	font-weight: 300;
`;
