import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(-50px)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 50px 0;
    width: 350px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s color;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s color;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 20px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: couver;
`;
