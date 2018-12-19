import React from 'react';
import { ArticleStyle } from './styles';
const ArticlePrtfolio = ({ children, zIndex, row, textAlign }) => (
	<ArticleStyle zIndex={zIndex} row={row} textAlign={textAlign}>
		{children}
	</ArticleStyle>
);

export default ArticlePrtfolio;
