import React from 'react';
import { ContainerPage, DevGrid, HeaderOfPage } from './../../';
import ArticlePrtfolio from './ArticlePrtfolio';
import compInksyImg from './img/portfolio-comp-inksy.jpg';
import hintSystemImg from './img/Hint-system_MANUAL-min.jpg';
import {
	PortfolioBackground,
	StyleHeadText,
	PortfolioContainerGrid,
	NotebookImage,
	ArticleHeader,
	TeaxtContainer,
	Paragraph
} from './styles';

const Portfolio = () => (
	<PortfolioBackground>
		<ContainerPage id='portfolio'>
			{/* <DevGrid /> */}
			<main>
				<HeaderOfPage text='Portfolio' />
				<StyleHeadText>Some of our recent projects</StyleHeadText>

				<PortfolioContainerGrid>
					<ArticlePrtfolio row='1/4' zIndex={1}>
						<TeaxtContainer align='right' left='-5%'>
							<ArticleHeader>HintSystem</ArticleHeader>
							<StyleHeadText>Full-cycle project</StyleHeadText>
							<Paragraph>
								Mobile application - software designed to work
								on smartphones, tablets and other mobile
								devices.
							</Paragraph>
						</TeaxtContainer>
						<NotebookImage selfAlign='flex-start'>
							<img src={compInksyImg} alt='' />
						</NotebookImage>
					</ArticlePrtfolio>
					<ArticlePrtfolio row='4/7' zIndex={3}>
						<NotebookImage selfAlign='flex-end'>
							<img src={hintSystemImg} alt='' />
						</NotebookImage>
						<TeaxtContainer align='left' left='5%'>
							<ArticleHeader>Inksy</ArticleHeader>
							<StyleHeadText>Full-cycle project </StyleHeadText>
							<Paragraph>
								INKSY - CRM system for printing and advertising
								agencies. State-of-the-art developments help
								INKSY to quickly manage all work processes. The
								system allows you to monitor the work of the
								enterprise from anywhere in the world.
							</Paragraph>
						</TeaxtContainer>
					</ArticlePrtfolio>
				</PortfolioContainerGrid>
			</main>
		</ContainerPage>
	</PortfolioBackground>
);

export default Portfolio;
