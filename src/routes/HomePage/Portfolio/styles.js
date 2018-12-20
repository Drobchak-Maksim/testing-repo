import styled from 'styled-components';

import notebookImg from './img/notebook.png';

export const PortfolioBackground = styled.div`
  background: #eaeaea;
`;

export const StyleHeadText = styled.h3`
  letter-spacing: 0.4px;
  font-family: Roboto;
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
  color: #666b70;
`;
export const ArticleHeader = styled(StyleHeadText)`
  color: #189af1;
`;
export const Paragraph = styled.p`
  width: 423px;
  height: 58px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: #666b70;
`;
export const PortfolioContainerGrid = styled.div`
  display: grid;
  grid: repeat(7, 1fr) / 1fr;
  width: 100%;
  height: 100%;
`;

export const NotebookImage = styled.div`
  psition: relative;
  display: flex;
  width: 48.5%;
  min-height: 370px;
 
  align-self: ${props => props.selfAlign};
  background: url('${notebookImg}') no-repeat center;
  background-size: cover;
  & :nth-child(1) {
    width: 93.5%;
    height: 83%;
    bottom: 0.6em;
    position: relative;
    margin: auto;
  }
`;

export const TeaxtContainer = styled.div`
  width: 48.5%;
  position: relative;
  text-align: ${props => props.align};
  padding-top: 6%;
  left: ${props => props.left};
  margin: -16px;
`;
