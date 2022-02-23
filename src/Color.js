import React from 'react';
import styled from 'styled-components';
import { colors } from './variables.tsx';
const Hero = ({ colorname }) => {
  if (colorname === 'white') {
    throw new Error('not visible');
  }
  return (
    <Background>
      <Colorname colorname={colors[`${colorname}`]}>{colorname}</Colorname>
    </Background>
  );
};
export default Hero;
const Colorname = styled.p`
  color: ${(props) => `${props.colorname}`};
`;
const Background = styled.div`
  width: 100%;
  background-color: white;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;
