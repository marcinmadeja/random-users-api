import styled from 'styled-components';

export const NavStyles = styled.nav`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;

	a {
		display: block;
		padding: 5px 10px;
		color: #fff;
		text-decoration: none;

		&.selected {
			text-decoration: underline;
		}
	}
`;
