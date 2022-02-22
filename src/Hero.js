import React from 'react';
import styled from 'styled-components';
const Hero = ({ heroname }) => {
  if (heroname === 'Kavana') {
    throw new Error('not a hero');
  }
  return <Heroname>{heroname}</Heroname>;
};
export default Hero;
const Heroname = styled.h1`
  color: blue;
`;
