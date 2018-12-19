import styled from 'styled-components';

export const ArticleStyle = styled.div`
	margin: 5px;
	height: 300px;
	width: 100%;
	grid-column: 1 / 2;
	grid-row: ${(props) => props.row};
	z-index: ${(props) => props.zIndex};
	display: flex;
`;
// justify-content: space-between;
// justify-content: space-around;
