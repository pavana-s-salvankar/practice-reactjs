import React from 'react';
import styled from 'styled-components';
import { colors } from '../variables.tsx';
const Hero = ({ colorname }) => {
  if (colorname === 'white') {
    throw new Error('not visible');
  }
  return (
    <Background>
      <Colorname colorname={colors[`${colorname}`]}>{colorname.toUpperCase()}</Colorname>
    </Background>
  );
};
export default Hero;
const Colorname = styled.p`
  color: ${(props) => `${props.colorname}`};
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
const Background = styled.div`
  width: 100%;
  background-color: white;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;
