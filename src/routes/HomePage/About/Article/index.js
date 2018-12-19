import React from 'react';

import { HeadLine, Image, Icon, ArticleText } from './styles';

const Article = ({ icon, headline, text, picture, textColor }) => (
  <div style={{ margin: 'auto' }}>
    <span>
      <Icon src={icon} alt='' />
      <HeadLine>{headline}</HeadLine>
      <ArticleText textColor={textColor}>{text}</ArticleText>
    </span>
    {picture && <Image src={picture} alt='' />}
  </div>
);

export default Article;
