import React from 'react';

import {ContainerPage, HeaderOfPage, BackgroundLogo} from '../../';
import Article from './Article';

import {Group52, Group53, Group54, ArticleImage} from './img';
import {
  AboutGrid,
  DevelopenArticle,
  StrategyArticle,
  ConsultingArticle
} from './style';

const About = () => (
  <ContainerPage id='about'>
    <BackgroundLogo />
    <main>
      <HeaderOfPage text='ABOUT US' />

      <AboutGrid>
        <DevelopenArticle>
          <Article
            textColor='#707070'
            icon={Group53}
            headline='Developmen'
            text={`We transform your ideas 
						into a perfect product and deliver it on time.
						Full software development cycle for all platforms.`}
            picture={ArticleImage}
          />
        </DevelopenArticle>
        <StrategyArticle>
          <Article
            textColor='white'
            icon={Group52}
            headline='Strategy'
            text={`Understanding who a company, 
						brand or product is, where they came 
						from and how they got here is
						integral in understanding where to go next.`}
          />
        </StrategyArticle>
        <ConsultingArticle>
          <Article
            textColor='#707070'
            icon={Group54}
            headline='Consulting'
            text={`Fix, improve, or get insights on
						your website without adding headcount
						to your team. Put our expertise to work.`}
          />
        </ConsultingArticle>
      </AboutGrid>
    </main>
  </ContainerPage>
);
export default About;
