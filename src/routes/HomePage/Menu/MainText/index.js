import React, { Fragment } from 'react';
import { StyleTextBlock, MarginSpan } from './styles';
import RedButton from '../../../../components/RedButton';
const Span = ({ title }) => (
  <Fragment>
    <MarginSpan>{title}</MarginSpan>
    <br />
  </Fragment>
);

export default () => (
  <StyleTextBlock>
    <Span title='Mobile application' />
    <Span title='DEVELOPMENT' />
    <Span title='Full-cycle website' />

    <RedButton text='Learn more now' />
  </StyleTextBlock>
);
