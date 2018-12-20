import React from 'react';
import ContainerPage, {BodyPage} from './styles';

export default ({props, children, id}) => (
  <ContainerPage id={id}>
    <BodyPage {...props}>{children}</BodyPage>
  </ContainerPage>
);
